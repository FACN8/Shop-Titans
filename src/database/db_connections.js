const { Pool } = require("pg");
const url = require("url");
require("dotenv").config();

let DB_URL = process.env.DATABASE_URL;
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "test") {
  console.log('fgfgfg',process.env.NODE_ENV)
  DB_URL = process.env.TEST_DB_URL;
}else{DB_URL = process.env.DATABASE_URL;console.log('not test')}

if (!DB_URL) throw new Error("Enviroment variable DATABASE_URL must be set");

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2
};
if (username) {
  options.user = username;
}
if (password) {
  options.password = password;
}

options.ssl = options.host !== "localhost";
console.log(DB_URL)
module.exports = new Pool(options);
