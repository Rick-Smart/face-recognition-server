const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: process.env.DB_CLIENT || "mysql",
  connection: {
    host: process.env.CLEARDB_DATABASE_URL,
  },
});

module.exports = db;
