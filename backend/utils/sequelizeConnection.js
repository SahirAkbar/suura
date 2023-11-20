const { Sequelize } = require("sequelize");
const tedious = require("tedious");

const sequelize = new Sequelize("suura", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
module.exports = sequelize;
