const express = require('express');
const router = express.Router();

const uuid = require('uuid').v4;

const sort = require('../utils');

let actors = require('../data/actor-data');

router.get('/', (req, res) => {
  const sortBy = req.query.sortBy || 'name';

  const sortOrder = req.query.sortOrder || 'asc';

  const sortedData = sort(actors, sortBy, sortOrder);

  res.json({ message: 'success', payload: sortedData });
});

// GET route with dynamic parameters
router.get('/:id', (req, res) => {
  const foundActor = actors.find((actor) => {
    return actor.id === req.params.id;
  });

  if (foundActor) {
    res.json({ message: 'success', payload: foundActor });
  } else {
    res.status(404).json({ message: 'failure', payload: 'Could not find actor' });
  }
});

module.exports = router;
