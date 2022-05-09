const router = require('express').Router();

const {
  Material, Item,
} = require('../db/models');

router
  .route('/:patternId')
  .get(async (req, res) => {
    try {
      const { patternId } = req.params;

      const itemsChosen = await Item.findAll({
        where: {
          pattern_id: Number(patternId),
        },
        raw: true,
      });

      const materialIds = itemsChosen.map((item) => item.material_id);

      const materials = await Material.findAll({
        where: {
          id: materialIds,
        },
        raw: true,
      });

      const materialsSorted = [...materials];
      materialsSorted.sort((a, b) => Number(a.id) - Number(b.id));

      const itemsChosenSorted = [...itemsChosen];
      itemsChosenSorted.sort((a, b) => Number(a.material_id) - Number(b.material_id));

      const materialsResult = [];
      for (let i = 0; i < materialsSorted.length; i += 1) {
        const obj = {
          ...materialsSorted[i],
          price: itemsChosenSorted[i].price,
          old_price: itemsChosenSorted[i].old_price,
        };
        materialsResult.push(obj);
      }

      res
        .status(200)
        .json(materialsResult);
    } catch (error) {
      res
        .status(400)
        .json({
          message: `Ошибка получения данных из базы данных. Описание ошибки: ${error.message}`,
        });
    }
  });

module.exports = router;
