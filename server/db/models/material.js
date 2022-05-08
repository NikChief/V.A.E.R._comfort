const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate({ Item }) {
      Material.hasMany(Item, { foreignKey: 'material_id' });
    }
  }
  Material.init({
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};
