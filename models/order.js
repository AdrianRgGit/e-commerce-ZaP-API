"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsToMany(models.Shoe, {
        through: models.ShoesOrder,
      });
    }
  }
  Order.init(
    {
      order_date: DataTypes.DATE,
      amount: DataTypes.DOUBLE,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
