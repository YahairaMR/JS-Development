const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToMongoDb = async function () {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MONGODB CONNECTED');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongoDb;
