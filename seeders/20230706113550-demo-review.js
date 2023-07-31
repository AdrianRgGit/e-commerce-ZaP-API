"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      {
        title: "Great sneakers",
        comment: "I love these sneakers, so comfortable",
        image: "image",
        ShoeId: 7,
        UserId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Amazing boots",
        comment: "These boots are perfect for winter",
        image: "image",
        ShoeId: 5,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Stylish sandals",
        comment: "These sandals are great for summer",
        image: "image",
        ShoeId: 8,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Classic oxfords",
        comment: "These oxfords are perfect for formal occasions",
        image: "image",
        ShoeId: 2,
        UserId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Comfortable slippers",
        comment: "These slippers are great for relaxing at home",
        image: "image",
        ShoeId: 10,
        UserId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Sporty running shoes",
        comment: "These running shoes are perfect for workouts",
        image: "image",
        ShoeId: 6,
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Elegant high heels",
        comment: "These high heels are ideal for special occasions",
        image: "image",
        ShoeId: 1,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Casual sneakers",
        comment: "These sneakers are great for everyday wear",
        image: "image",
        ShoeId: 9,
        UserId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Chic moccasins",
        comment: "These moccasins are both comfortable and stylish",
        image: "image",
        ShoeId: 3,
        UserId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Trendy flip flops",
        comment: "These flip flops are perfect for the beach",
        image: "image",
        ShoeId: 4,
        UserId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
