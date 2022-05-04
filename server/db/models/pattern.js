const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
    static associate({
      Item, Type, CategoryType, Category, SizeType,
    }) {
      Pattern.hasMany(Item, { foreignKey: 'pattern_id' });
      Pattern.belongsTo(Type, { through: CategoryType, foreignKey: 'category_type_id' });
      Pattern.belongsTo(Category, { through: CategoryType, foreignKey: 'category_type_id' });
      Pattern.belongsTo(SizeType, { foreignKey: 'size_type_id' });
    }
  }
  Pattern.init({
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
    category_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Pattern',
  });
  return Pattern;
};
