"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment_Information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Order }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userID" });
      this.belongsTo(Order, { foreignKey: "orderID" });
    }
  }
  Payment_Information.init(
    {
      payment_type: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Payment_Information",
    }
  );
  return Payment_Information;
};
