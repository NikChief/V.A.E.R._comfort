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
    base_size: {
      type: DataTypes.TEXT,
    },
    bust: {
      type: DataTypes.INTEGER,
    },
    hip_girth: {
      type: DataTypes.INTEGER,
    },
    waistline: {
      type: DataTypes.INTEGER,
    },
    pants_length_inseam: {
      type: DataTypes.INTEGER,
    },
    groin_to_bone: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'OrderItemSize',
  });
  return OrderItemSize;
};
