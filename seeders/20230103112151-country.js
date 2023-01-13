"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Countries", [
      {
        name: "Serbia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "USA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Montenegro",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bosnia & Herzegovina",
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
