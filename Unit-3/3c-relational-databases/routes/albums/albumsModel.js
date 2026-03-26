// 1a. Import mongoose
const mongoose = require('mongoose');

// 9a. Define an ObjectId variable

// 1b. Create an album schema
const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    artist: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
// 1c. Create the album model
const Album = mongoose.model('Album', albumSchema);

// 1d. Export the album model
module.exports = Album;
