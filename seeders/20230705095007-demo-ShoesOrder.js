"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ShoesOrders", [
      {
        ShoeId: 2,
        OrderId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 9,
        OrderId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 4,
        OrderId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 2,
        OrderId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 7,
        OrderId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 2,
        OrderId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 10,
        OrderId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 5,
        OrderId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 2,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ShoeId: 4,
        OrderId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  },
};
