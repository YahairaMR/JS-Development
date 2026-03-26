// 6a. Import the User model
const User = require('./usersModel');
const createAlbum = require('../albums/albumsController');
// 6b. Write functionality to create a user

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw Error('Error creating new user');
  }
};

// add an album to a user's favoriteAlbums list
// we need a way to find the user and then update the user's album list by adding an album ObjectId to the list
const addFavoriteAlbum = async (userId, albumId) => {
  try {
    /*
    push an albumId into the favoriteAlbums array
    by passing in an object like so into our push:
    {
        "favoriteAlbums" : "69c2e53f0f5ad687d3fb52c0"
    }
    */
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: albumId }, // update by pushing data to an array as opposed to overwriting the original
      { new: true },
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

// add an album to the user's favorite album list except this time, the album is NOT in the database yet
// we're going to pass in a user along with albumData instead of an albumId
const addNewFavoriteAlbum = async (userId, albumData) => {
  try {
    // create the new album
    // import create album function to add new album data to the database
    const newAlbum = await createAlbum(albumData);

    // access id from new album
    // newAlbum._id

    // add new album to user's favoriteAlbums array
    // need to make sure you pass id data in as an object
    /* 
          { favoriteAlbums: newAlbum._id }
        */
    const updatedUser = await addFavoriteAlbum(userId, { favoriteAlbums: newAlbum._id });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

// 6c. Export controller functions
module.exports = { createUser, addFavoriteAlbum, addNewFavoriteAlbum };
