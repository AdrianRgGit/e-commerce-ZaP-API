"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Orders", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ShoeOrderId: 2,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 9,
        ShoeOrderId: 3,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ShoeOrderId: 10,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ShoeOrderId: 1,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
        ShoeOrderId: 9,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ShoeOrderId: 4,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ShoeOrderId: 9,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ShoeOrderId: 8,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ShoeOrderId: 4,
      },

      {
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ShoeOrderId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
