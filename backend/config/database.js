const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'mysqldb',
  user: 'root',
  password: 'root',
  database: 'suura',
  port: 3306
});

