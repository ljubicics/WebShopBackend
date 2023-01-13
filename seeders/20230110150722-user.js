"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "strahinja",
        password: "strahinjasifra",
        email: "sljubicic7120rn@raf.rs",
        first_name: "Strahinja",
        last_name: "Ljubicic",
        street: "Banatska",
        number: "23",
        postal_code: "11211",
        points: 10,
        admin: true,
        moderator: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "katarina",
        password: "katarinasifra",
        email: "kmatejic6820rn@raf.rs",
        first_name: "Katarina",
        last_name: "Matejic",
        street: "Banjska",
        number: "11",
        postal_code: "11000",
        points: 10,
        admin: false,
        moderator: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "mateja",
        password: "matejasifra",
        email: "mciv@raf.rs",
        first_name: "Mateja",
        last_name: "Civ",
        street: "Bulevar",
        number: "400",
        postal_code: "12300",
        points: 20,
        admin: false,
        moderator: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "luka",
        password: "lukasifra",
        email: "lmitrovic@raf.rs",
        first_name: "Luka",
        last_name: "Mitrovic",
        street: "Silerova",
        number: "4",
        postal_code: "10000",
        points: 50,
        admin: false,
        moderator: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Jovana",
        password: "jovanasifra",
        email: "jmatejic@raf.rs",
        first_name: "Jovana",
        last_name: "Matejic",
        street: "Banjska",
        number: "11",
        postal_code: "11000",
        points: 90,
        admin: false,
        moderator: false,
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
