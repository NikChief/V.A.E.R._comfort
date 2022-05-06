/* eslint-disable camelcase */
const router = require('express').Router();

const {
  Material, Color, Type, CategoryType, Category, Pattern,
} = require('../db/models');
// const { Item } = require('../db/models');

// router
//   .route('/')
//   .get((req, res) => {
//     res.render('home');
//   });

// router
//   .route('/logout')
//   .get((req, res) => {
//     req.session.destroy();
//     res.redirect('/');
//   });
// const { Item } = require('../db/models');

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
      console.log('CAT_TYPE_ID ==>', category_type_id);
      const patterns = await Pattern.findAll({
        where: { category_type_id },
      });
      console.log(patterns);

      res
        .status(200)
        .json(patterns);
    } catch (e) {
      console.log(e.message);
    }
  });

router
  .route('/materials')
  .get(async (req, res) => {
    const materials = await Material.findAll();
    res
      .status(200)
      .json(materials);
  });

router
  .route('/items/:basket_id/:pattern_id/:material_id')
  .get((req, res) => {
    // async выше надо добавить
    const { basket_id, pattern_id, material_id } = req.params;

    // const { basket_id } = req.params;
    const item = await Item.findOne({
      where: {
        pattern_id,
        material_id,
      }
    });

    // const item = {
    //   id: 1,
    //   pattern_id: 11111,
    //   material_id: 22222,
    //   price: 1000,
    //   old_price: 2000,
    //   basket_id,
    // };

    res
      .status(200)
      .json(item);
  });

module.exports = router;
