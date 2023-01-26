"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Product_Types", [
      {
        typeName: "Bracelet",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeName: "Necklace",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeName: "Earring",
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
