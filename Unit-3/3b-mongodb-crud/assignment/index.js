const express = require('express');
const app = express();
const logger = require('morgan');

const connectToMongoDB = require('./database/connectToMongoDB');

app.use(express.json());
app.use(logger('dev'));

const mealPlanRouter = require('./routes/mealPlanRouter');
app.use('/api/v1/mealplans', mealPlanRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is now listening on PORT: ${PORT}`);
  connectToMongoDB();
});
