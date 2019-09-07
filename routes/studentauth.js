const express = require('express');
const router = express.Router();
const { studentSignup, studentSignin } = require('../handlers/studentAuth');

router.post('/studentSignup', function(req, res) {
  studentSignup
});

router.post('./studentSignin', function(req, res) {
  studentSignin
});

module.exports = router;
