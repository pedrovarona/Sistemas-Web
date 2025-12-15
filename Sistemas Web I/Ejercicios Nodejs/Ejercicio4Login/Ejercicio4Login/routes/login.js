var express = require('express'); //importar express
var router = express.Router(); //crear el router
const database = require('../database'); //importar la base de datos

router.get('/', function(req, res, next) {
  res.render('login', { user : req.session.user}); //renderizar la vista index con el titulo Express
});

router.post('/', async function(req, res, next) {
    const user = req.body.user;
    if (await database.users.isLoginRight(user, req.body.pass)) {
        req.session.user = {username: 'admin'};
        req.session.message = "Login correcto";
        res.redirect('restricted');
    }
    else{
        req.session.error = "Usuario o contraseña incorrectos";
        res.redirect('login');
    }
});
module.exports = router; //exportar el router para que se pueda usar en app.js