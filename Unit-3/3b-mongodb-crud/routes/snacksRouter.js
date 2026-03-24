/*
    6a. Set up basic request handler settings
*/
const express = require('express');
const router = express.Router();

// Import our Snack Model
const Snack = require('../models/snackModel');
/*
    9. Write a request handler function for GET requests to localhost:3000/api/snacks
*/
router.get('/', async (req, res) => {
  try {
    // return all snacks back from db with .find()
    const snacks = await Snack.find();
    res.json({
      message: 'success',
      payload: snacks,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: 'Error fetching snacks from database',
    });
  }
});

/*
    8. Write a request handler function for POST reqeuests to localhost:3000/api/snacks
*/
router.post('/', async (req, res) => {
  try {
    // req.body
    // Model.create(object) - create a database entry based on the object data we pass in
    // for dynamic data from a POST request, that object will be the request.body
    const newSnack = await Snack.create(req.body);
    res.json({
      message: 'success',
      payload: newSnack,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error,
    });
  }
});
/*
    10. Write a request handler function for PUT reqeuests to localhost:3000/api/snacks
*/

router.put('/:id', async (req, res) => {
  try {
    // prevent false positive error if we pass in a valid mongoDB ObjectId
    // check if id exists, if it doesn't, throw an error
    // const foundSnack = await Snack.findById(req.params.id);
    // if(!foundSnack){
    //     // custom error object
    //     throw new Error("Snack not found");
    // }

    // Model.findByIdAndUpdate(id, newData, { new: true })
    // id - id of the item you are trying to update
    // newData - incoming data you want to overwrite the old object with
    // { new: true} - returns the updated version of the data.  if you don't put this, the data will still update BUT you will return the original not updated data inside your variable

    // id: req.params.id
    // newData; req.body
    const updatedSnack = await Snack.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // prevent false positive if we pass in a valid Object ID
    // without this, code will only fail if we pass in an invalid object id.
    // Including this makes it so if we pass in a valid ObjectId and don't find the ID, we'll still return a failure message
    if (!updatedSnack) {
      throw new Error('Snack not found');
    }

    res.json({
      message: 'success',
      payload: updatedSnack,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

/*
    11. Write a request handler function to DELETE reqeuests to localhost:3000/api/snacks
*/
router.delete('/:id', async (req, res) => {
  try {
    // .findByIdAndDelete(id) - delete the item by that id
    const snackToDelete = await Snack.findByIdAndDelete(req.params.id);

    // prevents false positive by checking to see if something was actually deleted
    if (!snackToDelete) {
      throw new Error('Snack to delete not found');
    }

    res.json({
      message: 'success',
      payload: 'Item successfully removed',
    });
  } catch (error) {
    res.status(404).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

/*
    6b. Export the router
*/
module.exports = router;
