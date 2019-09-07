const express = require('express');
const router = express.Router();
const { parentSignup, parentSignin } = require('../handlers/parentAuth');

router.post('/parentSignup', function(req, res) {
  parentSignup
})

router.post('./parentSignin', function(req, res) {
  parentSignin
});

module.exports = router;
