// 3a. Import express, router, and controller functionality
const express = require('express');
const router = express.Router();

const createAlbum = require('./albumsController');
// 3b. Deal with a request for a POST to /api/albums
//   We deal with the network code here, and leave the database code to the
//   controller.

router.post('/', async (req, res) => {
  try {
    // call the controller function
    const newAlbum = await createAlbum(req.body);
    res.json({
      message: 'success',
      payload: newAlbum,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

// 3c. Export the router
module.exports = router;
