const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  
  res.statusCode = 200;
  res.send();
});

module.exports = router;