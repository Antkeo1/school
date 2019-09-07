// this file is for connect to a mongoose database
const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/school", {
  keepAlive: true,
  useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);

module.exports.Users = require('./users')
module.exports.Student = require('./student')
module.exports.Teacher = require('./teacher')
module.exports.Parent = require('./parent')
module.exports.Message = require('./message')
