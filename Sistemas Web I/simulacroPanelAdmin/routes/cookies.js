const express = require('express');
const router = express.Router();
const database = require('../database/index');

router.post('/', function(req, res, next) {
    req.session.cookiesAccepted = true;
    if (req.session.user){
        console.log("Se han aceptado cookies y ya se habia iniciado sesion");
        database.user.data[req.session.user.username].cookies = true;
    }
    res.status = 200;
    res.send();
});

module.exports = router;
