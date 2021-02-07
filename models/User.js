const mongoose = require('mongoose');

// Step 1: Add the Passport plugin
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role:{
      type: String,
      enum:["admin", "merchant","user"],
      default: "user"
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, 
{
  timestamps: true,
  toJSON: {
    getters: true
  }
});

module.exports = mongoose.model('User', UserSchema);