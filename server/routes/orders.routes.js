const router = require('express').Router();
const {
  Order, OrderItem, Item, Color,
} = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const orders = await Order.findAll({
        where: {
          user_id: req.session.userId,
        },
      });

      const orderItems = await OrderItem.findAll(
        {
          include: [{
            model: Item,

          },
          {
            model: Order,
          },
        ]
        },
      );

      const colors = await Color.findAll();

      const newOrderItems = [];
      for (let i = 0; i < orderItems.length; i++) {
        for (let j = 0; j < orders.length; j++) {

          if (orderItems[i].order_id === orders[j].dataValues.id) {
            newOrderItems.push(orderItems[i]);
          }
        }
      }

      
      // newOrderItems.map((element) => {
      //   colors.map((color) => {
      //     console.log(element.dataValues)
      //     if (element.dataValues.main_color_id === color.id) {
      //       return { key: 'value' }
      //       // return { ...element.dataValues, main_color_id: color.name };
      //     }
      //   });
      // });
      res.json({
        orders,
        colors,
        newOrderItems,
      });
    } catch (error) {
      res.status(400).json({
        message: `Что-то пошло не так. Описание ошибки: ${error.message}`,
      });
    }
  })
  .post(async (req, res) => {
    try {
      // eslint-disable-next-line prefer-destructuring
      const body = req.body;

      let newOrder = '';
      if (body.user_id === null) {
        // eslint-disable-next-line no-unused-vars
        newOrder = await Order.create({
          status: body.status,
          address: body.address,
          name: body.name,
          phone: Number(body.phone),
        });
      } else {
        // eslint-disable-next-line no-unused-vars
        newOrder = await Order.create(body);
      }

      res
        .status(200)
        .json({
          orderStatus: true,
          message: 'Ваш заказ успешно создан. Благодарим за покупку!',
          currentOrder: newOrder,
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
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const orderDetails = await OrderItem.findAll({
        where: {
          order_id: id,
        },
      });
      console.log(orderDetails);
      res.json({
        orderDetails,
      });
    } catch (error) {
      res.status(400).json({
        message: `Что-то пошло не так. Описание ошибки: ${error.message}`,
      });
    }
  });

module.exports = router;
