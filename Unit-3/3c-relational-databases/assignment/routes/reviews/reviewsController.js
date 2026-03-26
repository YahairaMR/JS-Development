const Movie = require('../movies/moviesModel');
const Review = require('./reviewsModel');

const getReviews = async () => {
  try {
    // .populate()
    // used to replace ObjectIds with the actual data they are referencing
    // .populate("movie") - replaces ObjectId with the movie data object
    // .populate has a built in .select()
    // .populate("movie", "title -_id") returns the movie object with only the title
    const reviews = await Review.find().populate('movie', 'title -_id');
    return reviews;
  } catch (error) {
    throw error;
  }
};

const getReviewsByMovieId = async (movieId) => {
  try {
    // filter by movie id to get all reviews associated with the selected movie
    // use .select() to only return reviewText and rating
    const movieReviews = await Review.find({ movie: movieId }).select('reviewText rating -_id');
    return movieReviews;
  } catch (error) {
    throw error;
  }
};

const createReview = async (reviewData) => {
  try {
    // check if movie id exists in DB
    // don't need variable since we don't need the movie data, just need to check if it exists
    // await getMovieById();

    const movie = await Movie.findById(reviewData.movie);

    if (!movie) {
      throw Error('Movie not found');
    }

    const newReview = await Review.create(reviewData);
    return newReview;
  } catch (error) {
    throw error;
  }
};

module.exports = { createReview, getReviewsByMovieId, getReviews };
