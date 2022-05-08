const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate({
      // OrderItemSize, 
      SizeType,
    }) {
      // Size.hasMany(OrderItemSize, { foreignKey: 'size_id' });
      Size.belongsTo(SizeType, { foreignKey: 'size_type_id' });
    }
  }
  Size.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    size_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};
