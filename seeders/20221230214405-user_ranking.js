"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("User_Rankings", [
      {
        discountID: 1,
        ranking_name: "rank1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discountID: 2,
        ranking_name: "rank2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discountID: 3,
        ranking_name: "rank3",
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
