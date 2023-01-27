"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "strahinja",
        password: await bcrypt.hash("strahinjasifra", 10),
        email: "sljubicic7120rn@raf.rs",
        first_name: "Strahinja",
        last_name: "Ljubicic",
        street: "Banatska",
        points: 10,
        admin: true,
        moderator: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "katarina",
        password: await bcrypt.hash("katarinasifra", 10),
        email: "kmatejic6820rn@raf.rs",
        first_name: "Katarina",
        last_name: "Matejic",
        street: "Banjska",
        points: 10,
        admin: false,
        moderator: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "mateja",
        password: await bcrypt.hash("matejasifra", 10),
        email: "mciv@raf.rs",
        first_name: "Mateja",
        last_name: "Civ",
        street: "Bulevar",
        points: 20,
        admin: false,
        moderator: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "luka",
        password: await bcrypt.hash("lukasifra", 10),
        email: "lmitrovic@raf.rs",
        first_name: "Luka",
        last_name: "Mitrovic",
        street: "Silerova",
        points: 50,
        admin: false,
        moderator: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Jovana",
        password: await bcrypt.hash("jovanasifra", 10),
        email: "jmatejic@raf.rs",
        first_name: "Jovana",
        last_name: "Matejic",
        street: "Banjska",
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
