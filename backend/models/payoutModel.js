const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelizeConnection"); // Replace with your Sequelize instance

const PayoutModel = sequelize.define(
  "Payout",
  {
    cash: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bank_name: {
      type: DataTypes.STRING,
    },
    IBAN: {
      type: DataTypes.STRING,
    },
    routing_number: {
      type: DataTypes.STRING,
    },
    bank_code: {
      type: DataTypes.STRING,
    },
    paypal_details: {
      type: DataTypes.JSON,
    },
    stripe_account_id: {
      type: DataTypes.STRING, // Adjust the data type as per your requirements
      allowNull: true,
    },
    accept_stripe_payments: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  
  {
    tableName: "payouts",
    timestamps: false,
    underscored: true,
  }
);

module.exports = PayoutModel;
