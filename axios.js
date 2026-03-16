const axios = require('axios');
const express = require('express');

const app = express();

// https://dummyjson.com/users/1
const fetchData = async () => {
  // axios
  const userData = await axios.get('https://dummyjson.com/users/1');

  // no need to parse json data with .json()
  // need to use .data to access relevent response data instead
  console.log(userData.data);
};

// fetchData();

app.get('/', async (req, res) => {
  try {
    // make a call to our dummyjson api
    const userData = await axios.get('https://dummyjson.com/users');

    res.json({
      message: 'success',
      payload: userData.data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
