module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      {
        name: 'Женские',
        link_name: 'woman',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Мужские',
        link_name: 'man',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Детские',
        link_name: 'child',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};
