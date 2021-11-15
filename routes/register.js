const express = require("express");
const register = require("../controllers/register");
const router = express.Router();
const db = require("../database");
const bcrypt = require("bcryptjs");

router
.route("/")
.post((req, res) => {
    register.handleRegister(req, res, db, bcrypt);
  });

  module.exports = router;