const express = require('express');

const router = express.Router();

const platformsData = require('../data/platforms');

router.get('/', (req, res) => {
  res.json({ message: 'success', payload: platformsData });
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
