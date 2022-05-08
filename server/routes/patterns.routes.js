const router = require('express').Router();
const { Pattern } = require('../db/models');

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const pattern = await Pattern.findByPk(id);
      // колонка description будет добавлена в таблицу pattern
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
