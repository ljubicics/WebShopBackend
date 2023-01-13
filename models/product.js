"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Review, Cart_Item, Discount, Order_Item }) {
      // define association here
      this.belongsTo(Discount, { foreignKey: "discountID" });
      this.hasMany(Review, {
        foreignKey: "productID",
        onDelete: "cascade",
        hooks: true,
      });
      this.hasMany(Cart_Item, {
        foreignKey: "productID",
        onDelete: "cascade",
        hooks: true,
      });
      this.hasMany(Order_Item, {
        foreignKey: "productID",
        onDelete: "cascade",
        hooks: true,
      });
    }
  }
  Product.init(
    {
      product_name: {
        type: DataTypes.STRING,
      },
      product_type: {
        type: DataTypes.STRING,
      },
      product_description: {
        type: DataTypes.STRING,
      },
      product_material: {
        type: DataTypes.STRING,
      },
      product_price: {
        type: DataTypes.INTEGER,
      },
      image_url: {
        type: DataTypes.STRING,
      },
      product_quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
