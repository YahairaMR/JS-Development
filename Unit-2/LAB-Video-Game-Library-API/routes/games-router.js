const express = require('express');
const uuid = require('uuid').v4;
const sort = require('../utils');

const router = express.Router();

let gamesData = require('../data/games');

// GET
router.get('/', (req, res) => {
  let filteredResults = gamesData;

  if (req.query.platform) {
    // console.log(`Query Params: ${req.query.platform}`)
    // go through each game and check if the platforms array includes the request query params platform.  If so, add it to the result
    filteredResults = gamesData.filter((game) => {
      return game.platforms.includes(req.query.platform);
    });

    // if (results.length > 0) {
    //   res.json({ message: "success", payload: results });
    // } else {
    //   res.status(404).json({ message: "failure", payload: "No results" });
    // }
  } else if (req.query.genre) {
    filteredResults = gamesData.filter((game) => {
      return game.genres.includes(req.query.genre);
    });
  } else if (req.query.releaseYear) {
    filteredResults = gamesData.filter((game) => {
      return Number(req.query.releaseYear) === game.releaseYear;
    });
  }

  const sortBy = req.query.sortBy || 'name';
  const order = req.query.order || 'asc';

  const sortedGames = sort(filteredResults, sortBy, order);

  if (sortedGames.length > 0) {
    res.json({ message: 'success', payload: sortedGames });
  } else {
    res.status(404).json({ message: 'failure', payload: 'No results' });
  }
});

router.get('/:id', (req, res) => {
  const foundGame = gamesData.find((game) => {
    return game.id === req.params.id;
  });

  if (foundGame) {
    res.json({ message: 'success', payload: foundGame });
  } else {
    res.status(404).json({ message: 'failure', payload: 'Game not found' });
  }
});

// POST
router.post('/', (req, res) => {
  const foundGame = gamesData.find((game) => {
    return game.name === req.body.name;
  });

  if (!foundGame) {
    const newGame = {
      id: uuid(),
      name: req.body.name,
      genres: req.body.genres,
      releaseYear: req.body.releaseYear,
      platforms: req.body.platforms,
    };
    gamesData.push(newGame);
    res.json({ message: 'success', payload: newGame });
  } else {
    res.status(500).json({ message: 'failure', payload: 'Game already exists' });
  }
});

// PUT
router.put('/:id', (req, res) => {
  const foundGame = gamesData.find((game) => {
    return game.id === req.params.id;
  });

  if (foundGame) {
    const updatedGameData = {
      name: req.body.name || foundGame.name,
      genres: req.body.genres || foundGame.genres,
      releaseYear: req.body.releaseYear || foundGame.releaseYear,
      platforms: req.body.platforms || foundGame.platforms,
    };

    Object.assign(foundGame, updatedGameData);

    res.json({ message: 'success', payload: foundGame });
  } else {
    res.status(404).json({ message: 'failure', payload: 'Game to update not found' });
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  const gameToDelete = gamesData.find((game) => {
    return req.params.id === game.id;
  });

  if (gameToDelete) {
    const results = gamesData.filter((game) => {
      return game.id !== gameToDelete.id;
    });

    gamesData = results;

    res.json({
      message: 'success',
      payload: `${gameToDelete.name} has been successfully removed.`,
    });
  } else {
    res.status(404).json({ message: 'failure', payload: 'Game to delete not found' });
  }
});

module.exports = router;
