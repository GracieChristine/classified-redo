"use strict";

module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/classified"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  },

};
