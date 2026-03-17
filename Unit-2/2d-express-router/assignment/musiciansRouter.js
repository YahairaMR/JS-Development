const express = require('express');
const router = express.Router();
const uuid = require('uuid').v4;
// const _ = require("lodash");

const sort = require('../utils');

let musicians = require('../data/musicians-data');

// const sort = (data, sortBy, sortOrder) => {
//   const sortedData = _.sortBy(data, sortBy);

//   if (sortOrder === "desc") {
//     sortedData.reverse();
//   }

//   return sortedData;
// };

router.get('/', (req, res) => {
  const sortBy = req.query.sortBy || 'name';

  const sortOrder = req.query.sortOrder || 'asc';

  const sortedData = sort(musicians, sortBy, sortOrder);

  res.json({ message: 'success', payload: sortedData });
});

router.post('/', (req, res) => {
  const newMusician = {
    id: uuid(),
    name: req.body.name,
    age: req.body.age,
  };
  musicians.push(newMusician);

  res.json({ message: 'success', payload: newMusician });
});

router.put('/:id', (req, res) => {
  const foundMusician = musicians.find((musician) => {
    return musician.id === req.params.id;
  });

  if (foundMusician) {
    const updatedMusicianData = {
      name: req.body.name || foundMusician.name,
      age: req.body.age || foundMusician.age,
    };

    Object.assign(foundMusician, updatedMusicianData);

    res.json({ message: 'success', payload: foundMusician });
  } else {
    res.status(404).json({
      message: 'failure',
      payload: '404 - Musician Not Found',
    });
  }
});

router.delete('/:id', (req, res) => {
  const musicianToDelete = musicians.find((musician) => {
    return req.params.id === musician.id;
  });

  if (musicianToDelete) {
    const results = musicians.filter((musician) => {
      return musicianToDelete.id !== musician.id;
    });

    musicians = results;

    res.json({ message: 'success', payload: 'Musician Successfully Deleted' });
  } else {
    res.status(404).json({
      message: 'failure',
      payload: '404 - Musician Not Found',
    });
  }
});

module.exports = router;
