module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CategoryTypes', [
      {
        type_id: 1,
        category_id: 1,
        image: 'costume-woman.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        type_id: 2,
        category_id: 1,
        image: 'costume-man.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        type_id: 3,
        category_id: 1,
        image: 'costume-child.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        type_id: 1,
        category_id: 3,
        image: 'dress-woman.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        type_id: 1,
        category_id: 4,
        image: 'sleepwear-woman.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        type_id: 2,
        category_id: 2,
        image: 't-shirt-man.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        type_id: 1,
        category_id: 2,
        image: 't-shirt-woman.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CategoryTypes', null, {});
  },
};
