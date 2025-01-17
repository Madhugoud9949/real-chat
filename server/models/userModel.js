const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarImage: {
    type: String,
    default: "",
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', userSchema);
