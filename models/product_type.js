"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      this.hasMany(Product, {
        foreignKey: "productTypeID",
      });
    }
  }
  Product_Type.init(
    {
      typeName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product_Type",
    }
  );
  return Product_Type;
};
