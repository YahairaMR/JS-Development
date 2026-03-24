const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },
    breakfast: {
      type: String,
      default: '',
    },
    lunch: {
      type: String,
      default: '',
    },
    dinner: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  },
);

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

module.exports = MealPlan;
