module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@gmail.com',
        isAdmin: true,
        password: '$2b$10$JG9u/lfyup3Q27HWucfWjOB7CkNiDwt7vUI8Uti/I28a9Ref7jfQG',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', null, {});
  },
};
