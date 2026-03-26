const express = require('express');
const { createMovie, getMovies, getMovieWithReviews } = require('./moviesController');
const { getReviewsByMovieId } = require('../reviews/reviewsController');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const movies = await getMovies(req.query.genre);
    res.json({
      message: 'success',
      payload: movies,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

router.get('/:movieId', async (req, res) => {
  try {
    const movieWithReviews = await getMovieWithReviews(req.params.movieId);
    res.json({
      message: 'success',
      payload: movieWithReviews,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const newMovie = await createMovie(req.body);
    res.json({
      message: 'success',
      payload: newMovie,
    });
  } catch (error) {
    res.status(500).json({
      message: 'failure',
      payload: error.message,
    });
  }
});

module.exports = router;
