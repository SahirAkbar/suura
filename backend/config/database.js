const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '172.233.58.103',
  user: 'root',
  password: 'root',
  database: 'suura',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Database connection error: ' + err.message);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
