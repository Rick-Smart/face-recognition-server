const express = require("express");
const image = require("../controllers/image");
const router = express.Router();
const db = require("../database");

router.route("/").put((req, res) => {
  image.handleImage(req, res, db);
});

module.exports = router;
