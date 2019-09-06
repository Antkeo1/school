const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const parentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true

  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  }
})

// a model of a user that the consist of the userSchema
const Parent = mongoose.model('Parent', parentSchema);

module.export = Parent;
