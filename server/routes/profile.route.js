const router = require('express').Router();
const { Order } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const orders = await Order.findAll({
        where: {
          user_id: req.session.userId,
        },
      });
      res.json({
        orders,
      });
    } catch (error) {
      res.status(400).json({
        message: `Что-то пошло не так, \n ${error.message}`,
      });
    }
  })
  .post(async (req, res) => {
    try {
      // eslint-disable-next-line prefer-destructuring
      const body = req.body;

      if (body.user_id === null) {
        // eslint-disable-next-line no-unused-vars
        const order = await Order.create({
          status: body.status,
          address: body.address,
          phone: Number(body.phone),
        });
      } else {
        // eslint-disable-next-line no-unused-vars
        const order2 = await Order.create(body);
      }

      res
        .status(200)
        .json({
          orderStatus: true,
          message: 'Ваш заказ успешно создан. Благодарим за покупку!',
        });
    } catch (error) {
      res
        .status(400)
        .json({
          orderStatus: false,
          message: `Что-то пошло не так. Описание ошибки: ${error.message}`,
        });
    }
  });

module.exports = router;
