const express = require('express');
const router = express.Router();
const { teacherSignup, teacherSignin } = require('../handlers/teacherAuth');

router.post('/teacherSignup', function(req, res) {
  teacherSignup
})

router.post('./teacherSignin', function(req, res) {
  teacherSignin
});

module.exports = router;
