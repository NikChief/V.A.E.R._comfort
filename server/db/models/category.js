const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ CategoryType, Pattern }) {
      Category.hasMany(CategoryType, { foreignKey: 'category_id' });
      // Category.hasMany(Pattern, { through: CategoryType, foreignKey: 'category_type_id' });
    }
  }
  Category.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    link_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
