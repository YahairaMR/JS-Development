/*
    6. Import express & uuid, set up router
*/
const express = require('express');
// router object that is designed for setting up routes inside its own file
const router = express.Router();
// creates unique/random ID
const uuid = require('uuid').v4;
/*
    7. Create an array of your favorite films using uuid() for unique ID's
*/
let films = [
  {
    id: uuid(), // generate an id every time we run the project
    name: 'Guardians of the Galaxy',
    boxOffice: 300,
  },
  {
    id: uuid(),
    name: 'Dr. Strange & the Multiverse of Madness',
    boxOffice: 75,
  },
  {
    id: uuid(),
    name: 'Thor',
    boxOffice: 55,
  },
  {
    id: uuid(),
    name: 'When You Finish Saving The World',
    boxOffice: 2,
  },
];

/*
    12. Create sort method for the films
*/

/*
    8a. Handle GET requests to /films
*/
// we use router instead of app inside router files
router.get('/', (req, res) => {
  res.json({ message: 'success', payload: films });
});

/*
    9. Handle POST requests to /films
*/
router.post('/', (req, res) => {
  // create a new object utilizing the data from the request body along with our generated uuid()
  const newFilm = {
    id: uuid(),
    name: req.body.name,
    boxOffice: req.body.boxOffice,
  };

  // add new data to array
  films.push(newFilm);
  res.json({ message: 'success', payload: newFilm });
});
/*
    10. Handle PUT requests to /films/[id]
*/
router.put('/:id', (req, res) => {
  // find the existing film to update

  const foundFilm = films.find((film) => {
    return film.id === req.params.id;
  });

  if (foundFilm) {
    // successfully found film, let's update!

    // prevent user from updating ID
    // copy over only the necessary data from the request body into a new object
    const updatedFilmData = {
      // if the user submits a new value for a property in the request body, use that
      // if they DO NOT, fall back to the value it was originally
      // for example, if the user submits a new name in the request body, use the new name. if they don't, use the foundFilm name
      name: req.body.name || foundFilm.name,
      boxOffice: req.body.boxOffice || foundFilm.boxOffice,
    };

    Object.assign(foundFilm, updatedFilmData);
    // Object.assign(foundFilm, req.body)

    res.json({ message: 'success', payload: foundFilm });
  } else {
    res.status(404).json({ message: 'failure', payload: 'Film to update Not Found' });
  }
});

/*
    11. Handle DELETE requests to /films/[id]
*/
router.delete('/:id', (req, res) => {
  const filmToDelete = films.find((film) => {
    return film.id === req.params.id;
  });

  // same as above with implicit return
  // const filmToDelete = films.find(film => film.id === req.params.id)

  if (filmToDelete) {
    const results = films.filter((film) => {
      return filmToDelete.id !== film.id;
    });

    films = results;

    res.json({ message: 'success', payload: `${filmToDelete.name} successfully removed` });
  } else {
    res.status(404).json({ message: 'failure', payload: 'Could not find film to delete' });
  }
});
/*
    8b. Export the router
*/
module.exports = router;
