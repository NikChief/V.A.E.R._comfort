module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Items',
          key: 'id',
        },
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      // base_size: {
      //   type: Sequelize.TEXT,
      // },
      // bust: {
      //   type: Sequelize.INTEGER,
      // },
      // hip_girth: {
      //   type: Sequelize.INTEGER,
      // },
      // waistline: {
      //   type: Sequelize.INTEGER,
      // },
      // pants_length_inseam: {
      //   type: Sequelize.INTEGER,
      // },
      // groin_to_bone: {
      //   type: Sequelize.INTEGER,
      // },
      main_color_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Colors',
          key: 'id',
        },
      },
      extra_color1_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id',
        },
      },
      extra_color2_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id',
        },
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
    await queryInterface.dropTable('OrderItems');
  },
};
