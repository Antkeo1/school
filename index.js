// to load all my envirment variables
require('dotenv').config();
// my imports
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const studentAuthRoutes = require('./routes/studentauth');
const teacherAuthRoutes = require('./routes/teacherauth');
const parentAuthRoutes = require('./routes/parentauth');

// what we are telling our app to use
app.use(cors());
app.use(bodyParser.json())

//routes
app.use('/api/auth', studentAuthRoutes)
app.use('/api/auth', teacherAuthRoutes)
app.use('/api/auth', parentAuthRoutes)

app.get('/', (req, res) => {
  res.send({hi: 'there'});
})


// error handlers
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
})

app.use(errorHandler);

// to listen to port to heroku or port 5000
const PORT = process.env.PORT || 5000;
// app.listen(PORT, function() {
  // console.log(`Server is starting on ${PORT}`)
// })
app.listen(5000);
