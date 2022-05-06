'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      {
        pattern_id: 1,
        material_id: 1,
        price: 4700,
        old_price: 6200,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 1,
        material_id: 2,
        price: 7200,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 1,
        material_id: 3,
        price: 7200,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 2,
        material_id: 1,
        price: 4390,
        old_price: 5890,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 3,
        material_id: 1,
        price: 4700,
        old_price: 6200,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 4,
        material_id: 1,
        price: 4700,
        old_price: 6200,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 5,
        material_id: 1,
        price: 4700,
        old_price: 6200,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 6,
        material_id: 1,
        price: 4700,
        old_price: 6200,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 7,
        material_id: 2,
        price: 7200,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 7,
        material_id: 3,
        price: 7200,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 8,
        material_id: 2,
        price: 7590,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 8,
        material_id: 3,
        price: 7590,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 9,
        material_id: 2,
        price: 4900,
        old_price: 6400,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 9,
        material_id: 3,
        price: 4900,
        old_price: 6400,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 10,
        material_id: 2,
        price: 4900,
        old_price: 6400,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 10,
        material_id: 3,
        price: 4900,
        old_price: 6400,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 11,
        material_id: 2,
        price: 7200,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 11,
        material_id: 3,
        price: 7200,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 12,
        material_id: 2,
        price: 7090,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 12,
        material_id: 3,
        price: 7090,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 13,
        material_id: 1,
        price: 4390,
        old_price: 5890,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 14,
        material_id: 2,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 14,
        material_id: 3,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 15,
        material_id: 2,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 15,
        material_id: 3,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 16,
        material_id: 2,
        price: 6890,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 16,
        material_id: 3,
        price: 6890,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 17,
        material_id: 1,
        price: 4800,
        old_price: 6300,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 18,
        material_id: 2,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 18,
        material_id: 3,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 19,
        material_id: 2,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 19,
        material_id: 3,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 20,
        material_id: 2,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 20,
        material_id: 3,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 21,
        material_id: 2,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 21,
        material_id: 3,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 22,
        material_id: 2,
        price: 7590,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 22,
        material_id: 3,
        price: 7590,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 23,
        material_id: 2,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 23,
        material_id: 3,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 24,
        material_id: 2,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 24,
        material_id: 3,
        price: 7290,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 27,
        material_id: 1,
        price: 5390,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 28,
        material_id: 1,
        price: 5190,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 29,
        material_id: 1,
        price: 4890,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 31,
        material_id: 1,
        price: 1590,
        old_price: 1990,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 32,
        material_id: 1,
        price: 2100,
        old_price: 2990,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 33,
        material_id: 1,
        price: 1360,
        old_price: 1950,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 34,
        material_id: 1,
        price: 1050,
        old_price: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        pattern_id: 35,
        material_id: 1,
        price: 1360,
        old_price: 1950,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  },
};