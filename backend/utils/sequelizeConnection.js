const { Sequelize } = require("sequelize");
const tedious = require("tedious");

const sequelize = new Sequelize("suura", "root", "test", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});



// const sequelize = new Sequelize("suura", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
//   port: 4306,
// });
module.exports = sequelize;
