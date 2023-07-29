"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter a name",
          },
        },
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter an email",
          },
          isEmail:{
            msg: "Please enter a valid email"
          }
        },
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter a password",
          },
        },
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Users");
  },
};
