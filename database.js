const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: process.env.DB_CLIENT,
  connection: {
    connectionString: process.env.DATABASE_URL,
  },
});

module.exports = db;
