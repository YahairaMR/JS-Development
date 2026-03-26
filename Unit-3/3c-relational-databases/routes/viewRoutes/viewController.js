const Album = require("../albums/albumsModel");
const User = require("../users/usersModel");

async function getHomePage(req, res) {
  try {
    res.render("home");
  } catch (error) {
    let errorObj = {
      message: "failure to get Home Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getAlbumPage(req, res) {
  try {
    let listOfAlbums = await Album.find({});

    res.render("albums", { albums: listOfAlbums });
  } catch (error) {
    let errorObj = {
      message: "failure to get Album Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getOneAlbumPage(req, res) {
  try {
    let currentAlbum = await Album.findById(req.params.id);
    const userDocumentsArray = await User.find({
      _id: { $in: currentAlbum.userFavorites },
    });

    res.render("oneAlbum", {
      album: currentAlbum,
      userList: userDocumentsArray,
    });
  } catch (error) {
    let errorObj = {
      message: "failure to get User Favorite Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getUsersPage(req, res) {
  try {
    let listOfUsers = await User.find({});

    res.render("users", { users: listOfUsers });
  } catch (error) {
    let errorObj = {
      message: "failure to get User Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getOneUserPage(req, res) {
  try {
    let currentUser = await User.findById(req.params.id);
    const albumsDocumentsArray = await Album.find({
      _id: { $in: currentUser.favoriteAlbums },
    });

    res.render("oneUser", {
      user: currentUser,
      albumList: albumsDocumentsArray,
    });
  } catch (error) {
    let errorObj = {
      message: "failure to get User Favorite Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

module.exports = {
  getHomePage,
  getAlbumPage,
  getOneAlbumPage,
  getUsersPage,
  getOneUserPage
};
