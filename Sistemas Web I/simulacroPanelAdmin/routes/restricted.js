const express = require('express');
const router = express.Router();
const users = require("../database/models/user.model");

router.get('/', function(req, res) {
  const usuarios = Object.values(users.data);
  res.render('restricted', {user: req.session.user, usuarios: usuarios});
});

module.exports = router;
