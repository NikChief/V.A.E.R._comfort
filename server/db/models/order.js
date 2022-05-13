const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, OrderItem }) {
      Order.belongsTo(User, { foreignKey: 'user_id' });
      Order.hasMany(OrderItem, { foreignKey: 'order_id' });
    }
  }
  Order.init({
    user_id: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
