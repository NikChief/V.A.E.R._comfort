const router = require('express').Router();
const { Pattern } = require('../db/models');

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const pattern = await Pattern.findByPk(id);
      // const pattern = {
      //   id: 1001,
      //   name: 'Костюм такой-то',
      //   image: 'https://sun9-17.userapi.com/s/v1/ig2/YXXIy-4jEn-xG26zXokIDItqcqD4lUxPnl662be6tLfWTX8bYiXMERx17WOekiHrTk8IkbK4gjyoSz4CyjAVmP9g.jpg?size=607x1080&quality=95&type=album',
      //   category_type_id: 1,
      //   color_count: 3,
      //   size_type_id: 1,
      // };
      res
        .status(200)
        .json(pattern);
    } catch (error) {
      res
        .status(400)
        .json({
          message: `Что-то пошло не так. Описание ошибки: ${error.message}`,
        });
    }
  });

module.exports = router;
