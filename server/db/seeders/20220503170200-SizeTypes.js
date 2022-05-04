module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SizeTypes', [
      {
        name: 'индивидуальные мерки',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'стандартный',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'детский',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SizeTypes', null, {});
  },
};
