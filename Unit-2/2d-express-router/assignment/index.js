const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

const musiciansRouter = require('./routes/musiciansRouter');
const actorsRouter = require('./routes/actorsRouter');

app.use('/api/v1/musicians', musiciansRouter);
app.use('/api/v1/actors', actorsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`);
});
