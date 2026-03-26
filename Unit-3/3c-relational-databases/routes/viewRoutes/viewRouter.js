const express = require("express");
const router = express.Router();

const {
  getHomePage,
  getAlbumPage,
  getOneAlbumPage,
  getUsersPage,
  getOneUserPage
} = require("./viewController");

// localhost:8080/
router.get("/", getHomePage);

// localhost:8080/albums
router.get("/albums", getAlbumPage);

// localhost:8080/albums/:id
router.get("/albums/:id", getOneAlbumPage);

router.get("/users/", getUsersPage);

router.get("/users/:id", getOneUserPage);

module.exports = router;
