var express = require('express'); //importar express
var router = express.Router(); //crear el router


router.get('/', function(req, res, next) {
  res.render('restricted', { title: 'Restricted'}); //renderizar la vista index con el titulo Express
});

module.exports = router; //exportar el router para que se pueda usar en app.js