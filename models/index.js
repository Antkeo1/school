// this file is for connect to a mongoose database
const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
  keepAlive: true,
  userMongoClient: true
});
