const express = require('express');
const { createReview } = require('./reviewsController');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newReview = await createReview(req.body);
    res.json({
      message: 'success',
      payload: newReview,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

module.exports = router;
