const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItemSize extends Model {
    static associate({ OrderItem, Size }) {
      OrderItemSize.belongsTo(OrderItem, { foreignKey: 'order_item_id' });
      OrderItemSize.belongsTo(Size, { foreignKey: 'size_id' });
    }
  }
  OrderItemSize.init({
    order_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    measure: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'OrderItemSize',
  });
  return OrderItemSize;
};
