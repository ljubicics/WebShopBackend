"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      {
        userID: 2,
        productID: 1,
        review_title: "REVIEW",
        review_text: "MNOGO DOBAR PROIZVOD",
        review_rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2,
        productID: 1,
        review_title: "REVIEW2",
        review_text: "MNOGO DOBAR PROIZVOD2",
        review_rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2,
        productID: 2,
        review_title: "REVIEW",
        review_text: "MNOGO DOBAR PROIZVOD",
        review_rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2,
        productID: 2,
        review_title: "REVIEW2",
        review_text: "MNOGO DOBAR PROIZVOD2",
        review_rating: 4.6,
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
