"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      orderId: DataTypes.INTEGER,
      dateOfOrder: DataTypes.DATE,
      debt: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
      timestamps: true,
    }
  );
  return Order;
};
