module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patterns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      category_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CategoryTypes',
          key: 'id',
        },
      },
      size_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SizeTypes',
          key: 'id',
        },
      },
      color_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pattern');
  },
};
