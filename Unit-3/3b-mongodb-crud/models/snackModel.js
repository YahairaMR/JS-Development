/*
    5. Set up a Model for the database
*/
const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      default: '', //if property is not included when adding data to DB, use default value
    },
    calories: {
      type: Number,
      default: 0,
    },
    delicious: {
      type: Boolean,
      default: true,
    },
    comments: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true, // set up timestamps for when data was created and last updated
  },
);

// Snack Model
const Snack = mongoose.model('Snack', snackSchema);

module.exports = Snack;
