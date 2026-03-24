/*
    5. Import the necessary modules
*/
const express = require('express');
const mongoose = require('mongoose'); //library that allows node to interact with MongoDB
const dotenv = require('dotenv');

const app = express();

// loads your environment variables from .env (or else they won't work!)
dotenv.config();
/*
    9. Establish a connection to our database
*/
const connectToMongoDB = async () => {
  try {
    // process.env.ENVIRONMENT_VARIABLE - how to access your variable form .env
    // mongoose function to connect to our instance of mongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};
/*
    10. Create a schema for a new collection
*/
// schema - defines the structure of our data
// we se key value pairs where key is the name of the property and value is the type
// new mongoose.Schema({ key: Type})
const studentSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    required: true, // property MUST be included in object data. without required: true, the property will be optional by default
    unique: true, //property must be unique
  },
  name: {
    type: String,
    required: true,
  },
  year: Number,
  subjects: [String], // array of strings
  retake: Boolean,
});
/*
    11. Create our model
*/
// Model - mongoose tool that provides CRUD functionality to ineract with our database based on the given schema
// const ModelName = mongoose.model("ModelName", schema)
// "ModelName" is uitilized to create the collection in the database - convetionally, it should be capitalized and singular ("student")
// collection name will be lowecase and plural ("students")
const Student = mongoose.model('Student', studentSchema);
/*
    12. Add a document on load
*/
const addStudent = async () => {
  // test data
  const studentData1 = {
    studentId: 10102,
    name: 'Jill NobleDesktop',
    year: 2026,
    subjects: ['JavaScript', 'Express', 'Python', 'AutoCAD'],
    // retake: false,
  };

  try {
    // utilize our Model to add a student to the database
    // Model.create({}) - takes in object data and will create a MongoDB document for the database
    const dbStudent1 = await Student.create(studentData1);
    console.log(`${dbStudent1.name} successfully added to database`);
  } catch (error) {
    console.log('Error adding student to database');
    console.log(error.message);
  }
};

addStudent();

/*
    13. Set up a GET request to `localhost:3000/`
*/
app.get('/students', async (req, res) => {
  try {
    // Model.find() - return all students from our database
    const students = await Student.find();
    res.json({
      message: 'success',
      payload: students,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

/*
Just like with our student data, we're going to set up a way to add item data to our database

Our time data will have the following properties: 
itemId - String (must be required and unique)
name - String (required)
category - String
inStock - Boolean, required
quantity - Number

create a Schema, a Model, a function that will add the item to the database, and a route to retrieve all items
*/

const itemSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: String,
  inStock: {
    type: Boolean,
    required: true,
  },
  quantity: Number,
});

const Item = mongoose.model('Item', itemSchema);

const addItem = async () => {
  const itemData = {
    itemId: 3,
    name: 'Laptop',
    category: 'Technology',
    inStock: true,
    quantity: 12,
  };

  try {
    const dbItem = await Item.create(itemData);
  } catch (error) {
    console.log(error.message);
  }
};

addItem();

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json({
      message: 'success',
      payload: items,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

/*
    6. Listen to a port
*/
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT${PORT}`);
  // after express server is successfully set up, connect to the DB
  connectToMongoDB();
});
