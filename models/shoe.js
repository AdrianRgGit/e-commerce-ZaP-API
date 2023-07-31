"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shoe extends Model {
    static associate(models) {
      Shoe.belongsTo(models.Type);
      Shoe.hasMany(models.Review);
      Shoe.belongsToMany(models.Order, {
        through: models.ShoesOrder,
      });
    }
  }
  Shoe.init(
    {
      brand: DataTypes.STRING,
      size: DataTypes.INTEGER,
      color: DataTypes.STRING,
      price: DataTypes.FLOAT,
      image: DataTypes.STRING,
      TypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Shoe",
    }
  );
  return Shoe;
};
