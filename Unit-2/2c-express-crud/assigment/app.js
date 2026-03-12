const express = require('express');
const logger = require('morgan');
const ingredients = require('./data/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.get('/ingredients', (req, res) => {
  res.json({ message: 'success', payload: ingredients });
});

app.post('/ingredients', (req, res) => {
  if (req.body) {
    const foundIngredient = ingredients.find((ingredient) => {
      return req.body.type === ingredient.type;
    });
    if (!foundIngredient) {
      ingredients.push(req.body);
      res.json({ message: 'success', payload: req.body });
    } else {
      res.status(500).json({ message: 'failure', payload: 'Ingredient Already Exists' });
    }
  } else {
    res.status(500).json({ message: 'failure', payload: 'No request data provided.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
