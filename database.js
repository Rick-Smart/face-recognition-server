const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "mysql",
  connection: {
    host: process.env.DATABASE_URL,
  },
});

module.exports = db;
