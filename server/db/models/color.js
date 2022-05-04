const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate({ OrderItem }) {
      Color.hasMany(OrderItem, { as: 'main_color', foreignKey: 'main_color_id' });
      Color.hasMany(OrderItem, { as: 'extra_color1', foreignKey: 'extra_color1_id' });
      Color.hasMany(OrderItem, { as: 'extra_color2', foreignKey: 'extra_color2_id' });
    }
  }
  Color.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
