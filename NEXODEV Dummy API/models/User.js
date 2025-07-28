const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  avatar: {
    type: String, // URL to image
    default: 'https://i.pravatar.cc/150?img=1'
  },
  bio: {
    type: String,
    default: ''
  },
  location: String,
  website: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
