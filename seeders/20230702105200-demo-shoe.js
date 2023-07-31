"use strict";

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
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Adidas",
        size: 9,
        color: "White",
        price: 79.99,
        TypeId: 7,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Puma",
        size: 7,
        color: "Red",
        price: 69.99,
        TypeId: 1,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Reebok",
        size: 6,
        color: "Blue",
        price: 99.99,
        TypeId: 3,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Under Armour",
        size: 10,
        color: "Grey",
        price: 109.99,
        TypeId: 5,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "New Balance",
        size: 8,
        color: "Green",
        price: 79.99,
        TypeId: 8,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Converse",
        size: 9,
        color: "Yellow",
        price: 59.99,
        TypeId: 10,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Vans",
        size: 7,
        color: "Pink",
        price: 69.99,
        TypeId: 5,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "Skechers",
        size: 10,
        color: "Purple",
        price: 89.99,
        TypeId: 1,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        brand: "ASICS",
        size: 6,
        color: "Orange",
        price: 99.99,
        TypeId: 3,
        image:
          "https://w7.pngwing.com/pngs/281/1/png-transparent-drawing-sneakers-shoe-coloring-book-sport-ear-miscellaneous-white-pencil.png",
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
