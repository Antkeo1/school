// this file is for connect to a mongoose database
const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/school", {
  keepAlive: true,
  userMongoClient: true
});

module.exports.Student = require('./student')
module.exports.Teacher = require('./teacher')
module.exports.Parent = require('./parent')
