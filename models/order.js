"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Order_Item, Payment_Information }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userID" });
      this.hasMany(Order_Item, { foreignKey: "orderID" });
      this.hasMany(Payment_Information, { foreignKey: "orderID" });
    }
  }
  Order.init(
    {
      pickup_in_store: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
