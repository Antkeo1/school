const express = require('express');
const router = express.Router();
const { signup } = require('../handlers/auth');

router.post('/studentSignup', function(req, res) {
  signup
})

module.exports = router;
