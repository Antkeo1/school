const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }],
  teachers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  }],
  parents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parent"
  }]
})


// a model of a Users that the consist of all the different types of users
const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
