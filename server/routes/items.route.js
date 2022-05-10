const router = require('express').Router();
const { Item } = require('../db/models');

router
  .route('/:basket_id/:pattern_id/:material_id')
  .get(async (req, res) => {
    try {
      // eslint-disable-next-line camelcase
      const { basket_id, pattern_id, material_id } = req.params;

      const item = await Item.findOne({
        where: {
          pattern_id: Number(pattern_id),
          material_id: Number(material_id),
        },
        raw: true,
      });

      // eslint-disable-next-line camelcase
      const itemWithBasketId = { ...item, basket_id };

      res
        .status(200)
        .json(itemWithBasketId);
    } catch (error) {
      res
        .status(400)
        .json({
          message: `Ошибка получения данных из базы данных. Описание ошибки: ${error.message}`,
        });
    }
  });

router
  .route('/:pattern_id/:material_id')
  .get(async (req, res) => {
    try {
      // eslint-disable-next-line camelcase
      const { pattern_id, material_id } = req.params;

      const item = await Item.findOne({
        where: {
          pattern_id: Number(pattern_id),
          material_id: Number(material_id),
        },
        raw: true,
      });

      res
        .status(200)
        .json(item);
    } catch (error) {
      res
        .status(400)
        .json({
          message: `Ошибка получения данных из базы данных. Описание ошибки: ${error.message}`,
        });
    }
  });

module.exports = router;
