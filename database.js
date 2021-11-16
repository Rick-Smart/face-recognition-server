const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: process.env.DB_CLIENT || "mysql",
  connection: {
    host: process.env.DB_HOST || "us-cdbr-east-04.cleardb.com",
    port: process.env.DB_PORT,
    user: process.env.DB_USER || "b3c41a6f0578c7",
    password: process.env.DB_PASSWORD || "de3623f6",
    database: process.env.DB || "heroku_4759242a8f057b9",
  },
});

module.exports = db;
