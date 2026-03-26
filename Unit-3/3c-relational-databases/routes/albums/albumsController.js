// 2a. Import the Album model
const Album = require('./albumsModel');

// Controller File - separate the logic for interacting with the database into its own file
// this makes it so the Router can handle routing and the Controller can handle logic
// we are also able to reuse our controller functions as needed to help simlify other controller functions with logic we have already established

// 2b. Write functionality to create an album

// write a function that will take in album data and create a new data entry based on that data
const createAlbum = async (albumData) => {
  // albumData will be the request body
  try {
    // creating the new album the same way would do normally
    // except inside our controller file
    const newAlbum = await Album.create(albumData);
    return newAlbum;
  } catch (error) {
    // propragates the error to the router file
    // throw error
    throw Error('Error creating new album');
  }
};

// 2c. Export controller functions
module.exports = createAlbum;
