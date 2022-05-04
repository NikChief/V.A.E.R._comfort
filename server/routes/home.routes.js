const router = require('express').Router();
// const { Color } = require('../db/models');
const { Material } = require('../db/models');
// const { Item } = require('../db/models');

router
  .route('/colors')
  .get((req, res) => {
    // async выше надо добавить
    // const colors = await Color.findAll();

    const colors = [
      {
        id: 1,
        name: 'красный',
        image: 'https://png.pngtree.com/thumb_back/fw800/background/20200821/pngtree-plain-red-solid-color-background-image_396556.jpg',
        code: 101,
      },
      {
        id: 2,
        name: 'желтый',
        image: 'https://i.ytimg.com/vi/PthNflknIQU/maxresdefault.jpg',
        code: 102,
      },
      {
        id: 3,
        name: 'зеленый',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Dwarf_cavendish_leaf.JPG/250px-Dwarf_cavendish_leaf.JPG',
        code: 103,
      },
    ];

    res
      .status(200)
      .json(colors);
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

    // const items = await Item.findAll({
    //   where: {
    //     pattern_id, 
    //     material_id,
    //   }
    // });

    const items = [
      {
        id: 1,
        pattern_id: 11111,
        material_id: 22222,
        price: 1000,
        old_price: 2000,
      },
      {
        id: 2,
        pattern_id: 11112,
        material_id: 22224,
        price: 1000,
        old_price: 2000,
      },
      {
        id: 3,
        pattern_id: 11113,
        material_id: 22223,
        price: 1000,
        old_price: 2000,
      },
    ];
    console.log('items', items)
    res
      .status(200)
      .json(items);
  });

module.exports = router;
