const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

const gamesRouter = require('./routes/games-router');
const platformsRouter = require('./routes/platforms-router');

app.use('/api/v1/games', gamesRouter);
app.use('/api/v1/platforms', platformsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
