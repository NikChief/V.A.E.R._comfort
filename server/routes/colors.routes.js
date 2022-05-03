const router = require('express').Router();
// const { Color } = require('../db/models');

router
  .route('/')
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

module.exports = router;
