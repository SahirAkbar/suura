const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelizeConnection"); // Replace with your Sequelize instance
const UserModel = require("./userModel");

const UserImagesModel = sequelize.define("UserImage", {
  image_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  image_type: {
    type: DataTypes.ENUM("fashion", "wedding"),
    allowNull: false,
  },
  uploaded_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});
UserModel.hasMany(UserImagesModel, { foreignKey: "user_id" });
UserImagesModel.belongsTo(UserModel, { foreignKey: "user_id" });
module.exports = UserImagesModel;
