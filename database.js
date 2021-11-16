const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: process.env.DB_CLIENT,
  connection: {
    connectionString: process.env.CLEARDB_DATABASE_URL,
    ssl: true,
  },
});

module.exports = db;
