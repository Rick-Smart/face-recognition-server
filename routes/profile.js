const express = require("express");
const profile = require("../controllers/profile");
const router = express.Router();
const db = require("../database");

router
.route("/:id")
.get((req, res) => {
  profile.handleProfile(req, res, db);
});

module.exports = router;
