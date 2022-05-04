const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SizeType extends Model {
    static associate({ Size, Pattern }) {
      SizeType.hasMany(Size, { foreignKey: 'size_type_id' });
      SizeType.hasMany(Pattern, { foreignKey: 'size_type_id' });
    }
  }
  SizeType.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'SizeType',
  });
  return SizeType;
};
