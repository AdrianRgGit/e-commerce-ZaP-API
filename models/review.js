"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Shoe);
      Review.belongsTo(models.User);
    }
  }
  Review.init(
    {
      title: DataTypes.STRING,
      comment: DataTypes.STRING,
      image: DataTypes.STRING,
      ShoeId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
