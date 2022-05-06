const router = require('express').Router();

const {
  Material, Color, Type, CategoryType, Category,
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
  .route('/materials')
  .get(async (req, res) => {
    // async выше надо добавить
    const materials = await Material.findAll();
    res
      .status(200)
      .json(materials);
  });

router
  .route('/items/:pattern_id/:material_id')
  .get((req, res) => {
    // async выше надо добавить
    // const { pattern_id, material_id } = req.params;

    // const item = await Item.findOne({
    //   where: {
    //     pattern_id,
    //     material_id,
    //   }
    // });

    const item = {
      id: 1,
      pattern_id: 11111,
      material_id: 22222,
      price: 1000,
      old_price: 2000,
    };

    res
      .status(200)
      .json(item);
  });

module.exports = router;
