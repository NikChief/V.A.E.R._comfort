const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate({ CategoryType, Pattern }) {
      Type.hasMany(CategoryType, { foreignKey: 'type_id' });
      // Type.hasMany(Pattern, { through: CategoryType, foreignKey: 'category_type_id' });
    }
  }
  Type.init({
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
    modelName: 'Type',
  });
  return Type;
};
