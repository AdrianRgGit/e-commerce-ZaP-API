'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Shoes", [
      {
        brand: "Nike",
        size: 8,
        color: "Black",
        price: 89.99,
        TypeId: 4,
        // OrderId: [3, 6],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Adidas",
        size: 9,
        color: "White",
        price: 79.99,
        TypeId: 7,
        // OrderId: [5, 8, 10],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Puma",
        size: 7,
        color: "Red",
        price: 69.99,
        TypeId: 1,
        // OrderId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Reebok",
        size: 6,
        color: "Blue",
        price: 99.99,
        TypeId: 3,
        // OrderId: [1, 6],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Under Armour",
        size: 10,
        color: "Grey",
        price: 109.99,
        TypeId: 5,
        // OrderId: [5, 5],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "New Balance",
        size: 8,
        color: "Green",
        price: 79.99,
        TypeId: 8,
        // OrderId: [3, 6, 5, 7],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Converse",
        size: 9,
        color: "Yellow",
        price: 59.99,
        TypeId: 10,
        // OrderId: [10, 2, 1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Vans",
        size: 7,
        color: "Pink",
        price: 69.99,
        TypeId: 5,
        // OrderId: [2, 9],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Skechers",
        size: 10,
        color: "Purple",
        price: 89.99,
        TypeId: 1,
        // OrderId: [3, 8],
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "ASICS",
        size: 6,
        color: "Orange",
        price: 99.99,
        TypeId: 3,
        // OrderId: [9, 7],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
