"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Types", [
      {
        name: "Running Shoes",
        description:
          "Designed for optimal performance and comfort during running activities.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Basketball Shoes",
        description:
          "Built to provide ankle support and cushioning for quick movements on the basketball court.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Casual Sneakers",
        description:
          "Versatile and stylish shoes suitable for everyday wear and various casual occasions.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Hiking Boots",
        description:
          "Sturdy and durable footwear designed for hiking and outdoor adventures on rugged terrains.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Cycling Shoes",
        description:
          "Equipped with stiff soles and compatibility with bike cleats, ideal for efficient pedaling during cycling.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Skate Shoes",
        description:
          "Specifically designed for skateboarding, with enhanced grip and durability to withstand skateboard tricks.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Trail Running Shoes",
        description:
          "Feature aggressive tread patterns and protective features for traction and stability on off-road trails.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Flip-Flops",
        description:
          "Lightweight and open-toe sandals, perfect for casual summer wear and beach outings.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Dress Shoes",
        description:
          "Formal footwear designed to complement formal attire, suitable for special occasions and professional settings.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Wrestling Shoes",
        description:
          "Provide maximum traction on the mat and ankle support for wrestlers during matches.",
        createdAt: new Date(),
        updatedAt: new Date(),
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
