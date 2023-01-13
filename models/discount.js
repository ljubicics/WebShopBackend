"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User_Ranking, Product }) {
      // define association here
      this.hasOne(User_Ranking, { foreignKey: "discountID" });
      this.hasMany(Product, { foreignKey: "discountID" });
    }
  }
  Discount.init(
    {
      discount_name: {
        type: DataTypes.STRING,
      },
      discount_percentage: {
        type: DataTypes.INTEGER,
      },
      discount_description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Discount",
    }
  );
  return Discount;
};
