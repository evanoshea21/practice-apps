const mysql = require("mysql2");
const Promise = require("bluebird");
require('dotenv').config();

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (\
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        name varchar(20),\
        email varchar(30),\
        password varchar(12),\
        line_1 varchar(60),\
        line_2 varchar(60),\
        city varchar(20),\
        state varchar(2),\
        zipcode INT,\
        phone varchar(14),\
        credit BIGINT,\
        exp_date varchar(10),\
        cvv INT\
        )"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
