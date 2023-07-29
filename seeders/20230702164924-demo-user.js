// Importaciones
const bcrypt = require("bcryptjs");



("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "superAdmin",
        email: "superadmin@example.com",
        password: bcrypt.hashSync("superadmin123", 10),
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Manolito",
        email: "manolito@manolito.es",
        password: bcrypt.hashSync("manolito123", 10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Mindundi",
        email: "mindundi@example.com",
        password: bcrypt.hashSync("mindundi123", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Emily Davis",
        email: "emilydavis@example.com",
        password: bcrypt.hashSync("securepass123", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "William Anderson",
        email: "williamanderson@example.com",
        password: bcrypt.hashSync("abc123", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Olivia Wilson",
        email: "oliviawilson@example.com",
        password: bcrypt.hashSync("qwerty123", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "James Martin",
        email: "jamesmartin@example.com",
        password: bcrypt.hashSync("p@ssw0rd", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Sophia Thompson",
        email: "sophiathompson@example.com",
        password: bcrypt.hashSync("password567", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Benjamin Clark",
        email: "benjaminclark@example.com",
        password: bcrypt.hashSync("securepassword", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Ava Rodriguez",
        email: "avarodriguez@example.com",
        password: bcrypt.hashSync("test1234", 10),
        role: "user",
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
