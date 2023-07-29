"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Orders", [
      {
        order_date: "2023-09-15",
        amount: 25.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
      },

      {
        order_date: "2023-11-27",
        amount: 8.75,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 9,
      },

      {
        order_date: "2023-12-10",
        amount: 45.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
      },

      {
        order_date: "2023-08-02",
        amount: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
      },

      {
        order_date: "2023-10-21",
        amount: 36.8,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
      },

      {
        order_date: "2023-11-03",
        amount: 14.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
      },

      {
        order_date: "2023-09-05",
        amount: 9.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
      },

      {
        order_date: "2023-12-01",
        amount: 28.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
      },

      {
        order_date: "2023-08-17",
        amount: 17.25,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
      },

      {
        order_date: "2023-10-29",
        amount: 11.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
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
