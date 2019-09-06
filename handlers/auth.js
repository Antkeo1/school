const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signin = function() {

};

// for students
exports.studentSignup = async function(req, res, next) {
  try {
    //create a user
      let studentUser = await db.Student.create(req.body);
      let { id, username, profileImageUrl } = studentUser
    // create a token
      let token = jwt.sign({
          id,
          username,
          profileImageUrl
       },
       //process.env..SECRET_KEY
         process.env.SECRET_KEY
     );
     return res.status(200).json({
       id,
       username,
       profileImageUrl,
       token
     })

  } catch(err) {
    // if validation fails
    if (err.code === 11000) {
      err.message = 'Sorry that username is taken'
    }
    return next({
      status: 400,
      message: err.message
    })

  }
};
