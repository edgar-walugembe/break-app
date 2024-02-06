"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userId: DataTypes.INTEGER,
      profilePicture: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      company: DataTypes.STRING,
      userType: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
    }
  );
  return User;
};
