const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({
      Order, Item, Color,
      // OrderItemSize,
    }) {
      OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
      OrderItem.belongsTo(Item, { foreignKey: 'item_id' });
      // OrderItem.hasMany(OrderItemSize, { foreignKey: 'order_item_id' });
      OrderItem.belongsTo(Color, { as: 'main_color', foreignKey: 'main_color_id' });
      OrderItem.belongsTo(Color, { as: 'extra_color1', foreignKey: 'extra_color1_id' });
      OrderItem.belongsTo(Color, { as: 'extra_color2', foreignKey: 'extra_color2_id' });
    }
  }
  OrderItem.init({
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_size: DataTypes.TEXT,
    bust: DataTypes.INTEGER,
    hip_girth: DataTypes.INTEGER,
    waistline: DataTypes.INTEGER,
    pants_length_inseam: DataTypes.INTEGER,
    groin_to_bone: DataTypes.INTEGER,
    main_color_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    extra_color1_id: DataTypes.INTEGER,
    extra_color2_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};
