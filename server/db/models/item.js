const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ Material, OrderItem, Pattern }) {
      Item.belongsTo(Material, { foreignKey: 'material_id' });
      Item.hasMany(OrderItem, { foreignKey: 'item_id' });
      Item.belongsTo(Pattern, { foreignKey: 'pattern_id' });
    }
  }
  Item.init({
    pattern_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    material_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    old_price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
