"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Country, User }) {
      // define association here
      this.belongsTo(Country, { foreignKey: "countryID" });
      this.hasMany(User, { foreignKey: "cityID" });
    }
  }
  City.init(
    {
      city_name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
