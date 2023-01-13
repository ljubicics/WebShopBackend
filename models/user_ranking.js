"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Ranking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, User_Ranking }) {
      // define association here
      this.hasMany(User, { foreignKey: "rankingID" });
      this.belongsTo(User_Ranking, { foreignKey: "discountID" });
    }
  }
  User_Ranking.init(
    {
      ranking_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_Ranking",
    }
  );
  return User_Ranking;
};
