const mysql = require('mysql2');
const db = mysql.createConnection({
  // host: 'mysqldb',
  host:'localhost',
  user: 'root',
  password: 'root',
  database: 'suura',
  port: 4306
});

