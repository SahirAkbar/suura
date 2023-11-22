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
    contactnumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue:null
    },
    portfolioUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
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
    },  // New fields for preferences
    accepts_clients: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    availability_reminders: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    hourly_rate: {
      type: DataTypes.STRING(100),
    },
    time_zones: {
      type: DataTypes.JSON, // Using JSON data type to store array-like data as JSON
    },
    extended_hours: {
      type: DataTypes.JSON, // Using JSON data type to store array-like data as JSON
    },
    languages: {
      type: DataTypes.JSON, // Using JSON data type to store array-like data as JSON
    },
    proficiency_level: {
      type: DataTypes.JSON, // Using JSON data type to store array-like data as JSON
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
