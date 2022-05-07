'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItemSizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        allowNull: false,
      },
      size_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id',
        },
        allowNull: false,
      },
      base_size: {
        type: Sequelize.TEXT,
      },
      bust: {
        type: Sequelize.INTEGER,
      },
      hip_girth: {
        type: Sequelize.INTEGER,
      },
      waistline: {
        type: Sequelize.INTEGER,
      },
      pants_length_inseam: {
        type: Sequelize.INTEGER,
      },
      groin_to_bone: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('OrderItemSizes');
  },
};
