const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelizeConnection");

const UserPreferences = sequelize.define(
    'UserPreferences',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      accepts_clients: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      accepting_clients_from: {
        type: DataTypes.DATE,
        defaultValue: null, // Initially set to null
      },
      availability_reminders: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      hourly_rate: {
        type: DataTypes.STRING(100),
      },
      time_zones: {
        type: DataTypes.JSON,
      },
      extended_hours: {
        type: DataTypes.JSON,
      },
      languages: {
        type: DataTypes.JSON,
      },
      proficiency_level: {
        type: DataTypes.JSON,
      },
    },
    {
      tableName: 'user_preferences',
      timestamps: true,
      underscored: true,
    }
);

module.exports = UserPreferences;
