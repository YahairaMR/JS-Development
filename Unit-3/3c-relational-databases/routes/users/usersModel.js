// 5a. Import mongoose
const mongoose = require('mongoose');

// 10a. Define an ObjectId variable

// gives us access to mongodb's unique generated ID type
// variable is used to keep code clean
const ObjectId = mongoose.Schema.Types.ObjectId;

// 5b. Create a user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    // an array of albums
    favoriteAlbums: {
      // to refer to another data type that we've created in our MongoDB database, utilize both the Object type and a reference (ref) to the specific model we want
      // array of album data;
      type: [{ type: ObjectId, ref: 'Album' }],
    },
  },
  { timestamps: true },
);

// 5c. Create the user model
const User = mongoose.model('User', userSchema);

// 5d. Export the User model
module.exports = User;
