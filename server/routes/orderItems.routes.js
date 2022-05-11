/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { OrderItem } = require('../db/models');

router
  .route('/')
  .post(async (req, res) => {
    try {
      const { body } = req;

      // eslint-disable-next-line no-restricted-syntax
      for (const item of body) {
        // eslint-disable-next-line no-await-in-loop
        const newOrderItem = await OrderItem.create({
          item_id: item.item_id,
          count: Number(item.count),
          order_id: item.order_id,
          // main_color_id: 1, // НАДО ПОПРАВИТЬ КОГДА ID ЦВЕТОВ БУДУТ ПРИХОДИТЬ
          main_color_id: Number(item.main_color_id) ? item.main_color_id : null,

          // extra_color1_id: 2, // НАДО ПОПРАВИТЬ КОГДА ID ЦВЕТОВ БУДУТ ПРИХОДИТЬ
          extra_color1_id: Number(item.extra_color1_id) ? item.extra_color1_id : null,

          // // eslint-disable-next-line no-dupe-keys

          // extra_color2_id: 3, // НАДО ПОПРАВИТЬ КОГДА ID ЦВЕТОВ БУДУТ ПРИХОДИТЬ
          extra_color2_id: Number(item.extra_color2_id) ? item.extra_color2_id : null,

          base_size: item.base_size ? item.base_size : null,
          bust: item.bust ? item.bust : null,
          hip_girth: item.hip_girth ? item.hip_girth : null,
          waistline: item.hip_girth ? item.hip_girth : null,
          pants_length_inseam: item.pants_length_inseam ? item.pants_length_inseam : null,
          groin_to_bone: item.groin_to_bone ? item.groin_to_bone : null,
          comment: item.comment ? item.comment : null,
        });
        // console.log('newOrderItem', newOrderItem)
      }

      res
        .status(200)
        .json({
          message: 'Данные записаны в базу данных',
        });
    } catch (error) {
      res
        .status(400)
        .json({
          message: `Ошибка получения данных c сервера. Описание ошибки: ${error.message}`,
        });
    }
  });

module.exports = router;
