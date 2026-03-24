const express = require('express');
const router = express.Router();

const MealPlan = require('../models/mealPlanModel');

router.get('/', async (req, res) => {
  try {
    // variable that we reassign based on queries received
    let foundMeals = {};
    if (req.query.date) {
      // if we get a date query
      foundMeals = await MealPlan.findOne({ date: req.query.date });
      if (!foundMeals) {
        throw Error('Meal not found');
      }
    } else if (req.query.meal) {
      const validOptions = ['breakfast', 'lunch', 'dinner'];
      if (!validOptions.includes(req.query.meal.toLowerCase())) {
        throw Error('Meal type not found');
      }
      // .select('string') - allows us to specify which properties we want to return instead of returning the entire object
      // .select('breakfast') - returns just breakfast
      // .select("breakfast date") - returns breakfast and date (can have as many properties as you want!!)
      // use - to omit certain properties such as the always included id "-_id"
      foundMeals = await MealPlan.find().select(`${re.query.meal} - _id`);
    } else {
      // no queries
      foundMeals = await MealPlan.find(); //.select('date breakfast - _id');
    }

    res.json({
      message: 'success',
      payload: foundMeals,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

// Read the plan for a specific date (dynamic params)
router.get('/:date', async (req, res) => {
  try {
    // find lets us filter based on certain criteria that we can specify through key value pairs
    // .find({ key: value }) - find all elements whose key property matches that value
    // .find( {date: "03-26-26"}) returns all elements whose date property matches "03-26-26"
    // find returns an array
    // const foundMeal = await MealPlan.find({ date: req.params.date })

    // .findOne - works just like find, but only finds the first element in the database that meets the criteria
    // .findOne( { key: value })
    // works especially with unique data properties
    const foundMeal = await MealPlan.findOne({ date: req.params.date });

    if (!foundMeal) {
      throw Error('Meal not found');
    }

    res.json({
      message: 'success',
      payload: foundMeal,
    });
  } catch (error) {
    res.status(404).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const newMealPlan = await MealPlan.create(req.body);
    res.json({
      message: 'success',
      payload: newMealPlan,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedMealPlan = await MealPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // check if data returned is null
    // if it is null, we did NOT find a mealplan whose id matched the req.params.id
    if (!updatedMealPlan) {
      throw Error('Meal Plan to update not found');
    }

    res.json({
      message: 'success',
      payload: updatedMealPlan,
    });
  } catch (error) {
    res.status(404).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

// Update but select the documents by Date instead
router.put('/date/:date', async (req, res) => {
  try {
    // findOneAndUpdate - like findByIdAndUpdate, but you can use any property
    const updatedMealPlan = await MealPlan.findOneAndUpdate({ date: req.params.date }, req.body, { new: true });
    res.json({
      message: 'success',
      payload: updatedMealPlan,
    });
  } catch (error) {
    res.status(404).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const mealPlanToDelete = await MealPlan.findByIdAndDelete(req.params.id);

    if (!mealPlanToDelete) {
      throw Error('Meal Plan to delete not found');
    }

    res.json({
      message: 'success',
      payload: `Meal for ${mealPlanToDelete.date} has been successfully deleted`,
    });
  } catch (error) {
    res.status(404).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

module.exports = router;
