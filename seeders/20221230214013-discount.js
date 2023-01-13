"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Discounts", [
      {
        discount_name: "newUser",
        discount_percentage: 0,
        discount_description: "New user discount",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discount_name: "silver",
        discount_percentage: 2,
        discount_description: "Silver discount rewarded after 5 points",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discount_name: "gold",
        discount_percentage: 2,
        discount_description: "Gold discount rewarded after 20 points",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discount_name: "Platinum",
        discount_percentage: 2,
        discount_description: "Platinum discount rewarded after 50 points",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        discount_name: "Diamond",
        discount_percentage: 2,
        discount_description: "Diamond discount rewarded after 100 points",
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
