/*
    0. Starter code - Modules
*/
const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

/*
    0. Starter code - Database connection
*/
const connectToMongoDB = require('./database/connectToMongoDB');

/*
    0. Starter code - Middleware
*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(logger('dev'));

/*
    4. Import and use the album router
*/
const albumsRouter = require('./routes/albums/albumsRouter');
app.use('/api/v1/albums', albumsRouter);

/*
    8. Import and use the user router
*/

const usersRouter = require('./routes/users/usersRouter');
app.use('/api/v1/users', usersRouter);

/*
    11. Context - Plug in the view router
*/
const viewRouter = require('./routes/viewRoutes/viewRouter');
app.use('/', viewRouter);

/*
    0. Starter code - Server start
*/
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is on port ${PORT}...`);

    connectToMongoDB();
});
