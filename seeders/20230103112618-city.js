"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cities", [
      {
        countryID: 1,
        city_name: "Beograd",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryID: 2,
        city_name: "Miami",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryID: 3,
        city_name: "Budva",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryID: 4,
        city_name: "Sarajevo",
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
