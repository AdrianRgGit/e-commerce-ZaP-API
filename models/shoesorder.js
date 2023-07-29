'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoesOrder extends Model {
    static associate(models) {
    }
  }
  ShoesOrder.init({
    ShoeId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShoesOrder',
  });
  return ShoesOrder;
};