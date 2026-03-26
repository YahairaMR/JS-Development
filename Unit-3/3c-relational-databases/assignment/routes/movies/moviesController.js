const { getReviewsByMovieId } = require('../reviews/reviewsController');
const Movie = require('./moviesModel');

const getMovies = async (genreQuery) => {
  try {
    // filter by genre
    let movies = {};

    if (genreQuery) {
      movies = await Movie.find({ genre: genreQuery });
    } else {
      movies = await Movie.find();
    }

    return movies;
  } catch (error) {
    throw error;
  }
};

const getMovieWithReviews = async (movieId) => {
  try {
    // .findById - use this when searching by ID
    //     // use .findOne for searching by any other property EXCEPT ID
    // get selected movie
    const movie = await Movie.findById(movieId);
    // get all reviews
    const reviews = await getReviewsByMovieId(movieId);

    /*
        let person = {
            name: "Jim",
            age: 30
        }
        person.email = "jim@email.com"    
        */

    // converts our mongodb document object into a proper JS object
    const movieObject = movie.toObject();

    // add reviews array to our movie object
    movieObject.reviews = reviews;

    return movieObject;
  } catch (error) {
    throw error;
  }
};

const createMovie = async (movieData) => {
  try {
    const newMovie = await Movie.create(movieData);
    return newMovie;
  } catch (error) {
    throw error;
  }
};

module.exports = { createMovie, getMovies, getMovieWithReviews };
