const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategoryType extends Model {
    static associate({ Category, Type, Pattern }) {
      CategoryType.belongsTo(Type, { foreignKey: 'type_id' });
      CategoryType.belongsTo(Category, { foreignKey: 'category_id' });
      CategoryType.hasMany(Pattern, { foreignKey: 'category_type_id' });
    }
  }
  CategoryType.init({
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'CategoryType',
  });
  return CategoryType;
};
