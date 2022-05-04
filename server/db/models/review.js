const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate({ User, Order }) {
      Review.belongsTo(User, { foreignKey: 'user_id' });
      Review.belongsTo(Order, { foreignKey: 'order_id' });
    }
  }
  Review.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
