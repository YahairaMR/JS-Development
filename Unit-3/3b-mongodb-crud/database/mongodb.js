/*
    1. Set up a connection to MongoDB using mongoose:
*/
// 1a. Import mongoose, setup .env use
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// 1b. Create a connection function
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');
  } catch (error) {
    console.log(error);
  }
};
// 1c. Export the function
module.exports = connectToMongoDB;
