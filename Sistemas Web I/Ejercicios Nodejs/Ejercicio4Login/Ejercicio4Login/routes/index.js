var express = require('express');
var router = express.Router(); //crear el router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.session.user});
});

module.exports = router; //exportar el router para que se pueda usar en app.js
