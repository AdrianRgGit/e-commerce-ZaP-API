"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shoes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brand: {
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter a brand",
          },
        },
        type: Sequelize.STRING,
      },
      size: {
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter a size",
          },
        },
        type: Sequelize.INTEGER,
      },
      color: {
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter a color",
          },
        },
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter a price",
          },
        },
        type: Sequelize.FLOAT,
      },
      TypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Shoes");
  },
};
