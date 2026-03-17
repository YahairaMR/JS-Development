const express = require('express');

const router = express.Router();

const platformsData = require('../data/platforms');
const sort = require('../utils');

router.get('/', (req, res) => {
  const sortBy = req.query.sortBy || 'name';
  const order = req.query.order || 'asc';

  const sortedPlatforms = sort(platformsData, sortBy, order);
  res.json({ message: 'success', payload: sortedPlatforms });
});

router.get('/:id', (req, res) => {
  const foundPlatform = platformsData.find((platform) => {
    return Number(req.params.id) === platform.id;
  });

  if (foundPlatform) {
    res.json({ message: 'success', payload: foundPlatform });
  } else {
    res.status(404).json({ message: 'failure', payload: 'Platform not found' });
  }
});

module.exports = router;
