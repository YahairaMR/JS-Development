const express = require('express');
const app = express();
const logger = require('morgan');

const connectToMongoDB = require('./database/connectToMongoDB');

app.use(express.json());
app.use(logger('dev'));

const PORT = 3000;

const moviesRouter = require('./routes/movies/moviesRouter');
app.use('/api/v1/movies', moviesRouter);

const reviewsRouter = require('./routes/reviews/reviewsRouter');
app.use('/api/v1/reviews', reviewsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
  connectToMongoDB();
});
