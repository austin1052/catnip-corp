// Connect to DB
const { Client } = require("pg");
const DB_NAME = "catnip-dev";
const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;
const client = new Client({
  connectionString: DB_URL,
  ssl: process.env.DATABASE_URL ? true : false,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = client;
