/*
    7. Set up the users router
*/

// 7a. Import express, router, and controller functionality
const express = require('express');
const router = express.Router();

const { createUser, addFavoriteAlbum, addNewFavoriteAlbum } = require('./usersController');

// 7b. Route the ability to create a user at localhost:3000/api/users
//   We deal with the network code here, and leave the database code to the
//   controller.

router.post('/', async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.json({
      message: 'success',
      payload: newUser,
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
    const updatedUser = await addFavoriteAlbum(req.params.id, req.body);
    res.json({
      message: 'success',
      payload: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

router.put('/newAlbum/:id', async (req, res) => {
  try {
    const updatedUser = await addNewFavoriteAlbum(req.params.id, req.body);
    res.json({
      message: 'success',
      payload: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

// 7c. Export the router
module.exports = router;
