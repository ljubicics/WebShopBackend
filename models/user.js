"use strict";
const { Model, DATEONLY } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Country,
      City,
      Review,
      Cart_Item,
      User_Ranking,
      Order,
      Payment_Information,
    }) {
      // define association here
      this.belongsTo(Country, { foreignKey: "countryID" });
      this.belongsTo(City, { foreignKey: "cityID" });
      this.belongsTo(User_Ranking, { foreignKey: "rankingID" });
      this.hasMany(Review, {
        foreignKey: "userID",
        onDelete: "cascade",
        hooks: true,
      });
      this.hasMany(Cart_Item, {
        foreignKey: "userID",
        onDelete: "cascade",
        hooks: true,
      });
      this.hasMany(Order, { foreignKey: "userID" });
      this.hasMany(Payment_Information, { foreignKey: "userID" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      street: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.STRING,
      },
      postal_code: {
        type: DataTypes.STRING,
      },
      points: {
        type: DataTypes.INTEGER,
      },
      admin: {
        type: DataTypes.BOOLEAN,
      },
      moderator: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["password", "email"],
        },
      },
      scopes: {
        authScope: {},
      },
    }
  );
  return User;
};
