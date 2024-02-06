"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      productId: DataTypes.INTEGER,
      img: DataTypes.STRING,
      name: DataTypes.STRING,
      unitPrice: DataTypes.INTEGER,
      adminId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
      timestamps: true,
    }
  );
  return Product;
};
