const router = require('express').Router();
const { Order, OrderItem } = require('../db/models');

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

router
  .route('/:id')
  .get((req, res) => {
    try {
      // const { id } = req.params;
      // console.log('id=================');
      // async
      // const orderDetails = await OrderItem.findAll({
      //   where: {
      //     order_id: id,
      //   },
      // });
      const orderDetails = [
        {
          item_id: 4,
          count: 1,
          order_item_size_id: 4,
          main_color_id: 3,
          extra_color1_id: 2,
          extra_color2_id: 3,
        },
        {
          item_id: 4,
          count: 1,
          order_item_size_id: 4,
          main_color_id: 3,
          extra_color1_id: 2,
          extra_color2_id: 3,
        },
      ]
      res.json({
        orderDetails,
      });
    } catch (error) {
      res.status(400).json({
        message: `Что-то пошло не так, \n ${error.message}`,
      });
    }
  });

module.exports = router;
