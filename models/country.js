"use strict";
const { Model } = require("sequelize");
const city = require("./city");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ City, User }) {
      // define association here
      this.hasMany(City, {
        foreignKey: "countryID",
        onDelete: "cascade",
        hooks: true,
      });
      this.hasMany(User, {
        foreignKey: "countryID",
        onDelete: "cascade",
        hooks: true,
      });
    }
  }
  Country.init(
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};
