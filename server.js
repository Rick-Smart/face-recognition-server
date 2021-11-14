const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(database.users);
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  db("login")
    .where("EMAIL", email)
    .then((userData) => {
      bcrypt.compare(password, userData[0].HASH).then((matchingPassword) => {
        if (matchingPassword) {
          db("users")
            .where("EMAIL", email)
            .then((userData) => {
              res.status(200).json(userData[0]);
            });
        } else {
          res.status(404).json("No user found");
        }
      });
    });
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      db("login")
        .insert({
          HASH: hash,
          EMAIL: email,
        })
        .then(() => {
          // console.log(hash);
        });
    });
  });

  db("users")
    .insert({
      email: email,
      name: name,
      joined: new Date(),
    })
    .then((userID) => {
      db("users")
        .where("ID", userID[0])
        .then((userData) => {
          res.status(200).json(userData[0]);
        });
    })
    .catch((err) => {
      res.status(400).json("unable to register");
    });
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  db("users")
    .where("ID", id)
    .then((userData) => {
      if (userData[0]) {
        res.status(200).json(userData[0]);
      } else {
        res.status(404).json("no user found");
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.put("/image", (req, res) => {
  const { id } = req.body;
  db("users")
    .where("ID", id)
    .increment("ENTRIES", 1)
    .then(() => {
      db("users")
        .where("ID", id)
        .then((userData) => {
          res.status(200).json(userData[0].ENTRIES);
        });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// server listening on port 3001 --------------------
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
