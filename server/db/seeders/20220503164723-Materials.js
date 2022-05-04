module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Materials', [
      {
        type: 'Двухнитка',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        type: 'Трёхнитка',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        type: 'С начесом',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Materials', null, {});
  },
};
