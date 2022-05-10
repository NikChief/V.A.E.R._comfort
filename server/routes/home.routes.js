/* eslint-disable camelcase */
const router = require('express').Router();
const twilio = require('twilio');

const {
  Color, Type, CategoryType, Category, Pattern, Item,
} = require('../db/models');

const { getLowerPrice } = require('../helpers/getPrice');

router
  .route('/colors')
  .get(async (req, res) => {
    const colors = await Color.findAll();

    res
      .status(200)
      .json(colors);
  });

router
  .route('/types')
  .get(async (req, res) => {
    const types = await Type.findAll();

    res
      .status(200)
      .json(types);
  });

router
  .route('/catalogue/:type')
  .get(async (req, res) => {
    const { type } = req.params;
    const categoryTypes = await CategoryType.findAll({
      include: [{
        model: Type,
        where: { link_name: type },
      },
      {
        model: Category,
      },
      ],
    });
    res
      .status(200)
      .json(categoryTypes);
  });

router
  .route('/catalogue')
  .get(async (req, res) => {
    try {
      const category_type_id = +req.query.category_type_id;

      const patterns = await Pattern.findAll({
        where: { category_type_id },

        include: {
          model: Item,
          attributes: [
            'price',
          ],
        },
        attributes: [
          'id', 'name', 'image',
        ],
      });
      res
        .status(200)
        .json(getLowerPrice(patterns));
    } catch (error) {
      res
        .status(400)
        .json({
          message: `Ошибка получения данных из базы данных. Описание ошибки: ${error.message}`,
        });
    }
  });

module.exports = router;
