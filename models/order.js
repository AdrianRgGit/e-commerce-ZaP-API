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
      UserId: DataTypes.INTEGER,
      ShoeOrderId: DataTypes.INTEGER,
      order_date: DataTypes.DATE,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
