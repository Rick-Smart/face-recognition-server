const express = require("express");
const signin = require("../controllers/signin");
const router = express.Router();
const db = require("../database");
const bcrypt = require("bcryptjs");

router
.route("/")
.post((req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

module.exports = router;
