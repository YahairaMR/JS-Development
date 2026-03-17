/*
    1. Import express & Morgan, set up app variable
*/
const express = require('express');
const logger = require('morgan');

const app = express();
/*
    2. Set up middleware
*/
app.use(logger('dev'));
app.use(express.json());
/*
    3. Import Router files
*/
const filmsRouter = require('./routes/filmsRouter');
const showsRouter = require('./routes/showsRouter');

/*
    4. Set up the URL routes to connect to each router
*/
// middleware to use router file
// app.use("routeURL", router)
// /api/v1/films - more proper name for setting up an API route
// /api/versionNumber/identifier
app.use('/api/v1/films', filmsRouter);
app.use('/api/v1/shows', showsRouter);

/*
    5. Set up the port and begin listening
*/
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
