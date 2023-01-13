"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        product_name: "Infinity",
        product_type: "Necklace",
        product_description: "Beautiful infinity necklace",
        product_material: "gold",
        product_price: 100,
        image_url: "slika",
        product_quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Love",
        product_type: "Bracelet",
        product_description: "Beautiful love bracelet",
        product_material: "silver",
        product_price: 15,
        image_url: "slika",
        product_quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Clover",
        product_type: "Bracelet",
        product_description: "Beautiful clover bracelet",
        product_material: "gold",
        product_price: 70,
        image_url: "slika",
        product_quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Infinity 2",
        product_type: "Necklace",
        product_description: "Beautiful necklace",
        product_material: "silver",
        product_price: 25,
        image_url: "slika",
        product_quantity: 27,
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
