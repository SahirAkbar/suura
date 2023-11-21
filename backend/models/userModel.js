const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelizeConnection"); // Replace with your Sequelize instance
const UserModel = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    first_name: DataTypes.STRING(255),
    last_name: DataTypes.STRING(255),
    username: {
      type: DataTypes.STRING(50),
      defaultValue: null,
      unique: true,
    },
    time_zone: DataTypes.STRING(255),
    currency: DataTypes.STRING(50),
    cover_image: DataTypes.STRING(255),
    profile_image: DataTypes.STRING(255),
    bio: DataTypes.TEXT,
    instagram_id: DataTypes.STRING(255),
    instagram_username: DataTypes.STRING(255),
    full_name: DataTypes.STRING(255),
    selected_sessions: {
      type: DataTypes.JSON,
      defaultValue: null,
    },
    country: {
      type: DataTypes.STRING(255),
      defaultValue: "Netherlands",
    },
    state: DataTypes.STRING(255),
    city: DataTypes.STRING(255),
    business: DataTypes.STRING(255),
    user_id: DataTypes.STRING(500),
    AskServices: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    OfferServices: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    preferences: {
      type: DataTypes.JSON,
      allowNull:true
    }
  },
  {
    tableName: "users",
    timestamps: false, // Set to true if you want Sequelize to add createdAt and updatedAt columns
    underscored: true, // Use underscores in column names (e.g., created_at instead of createdAt)
  }
);

module.exports = UserModel;
