"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userID" });
      this.belongsTo(Product, { foreignKey: "productID" });
    }
  }
  Review.init(
    {
      review_title: {
        type: DataTypes.STRING,
      },
      review_text: {
        type: DataTypes.STRING,
      },
      review_rating: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
