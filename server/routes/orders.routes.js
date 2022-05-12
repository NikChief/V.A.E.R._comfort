const router = require('express').Router();
const {
  Order, OrderItem, Item, Color, Pattern, Material,
} = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      let orders;
      if (req.session.userIsAdmin) {
        orders = await Order.findAll({});
      } else {
        orders = await Order.findAll({
          where: {
            user_id: req.session.userId,
          }
        })
      }
      const orderItems = await OrderItem.findAll(
        {
          include: [{
            model: Item,
          },
          {
            model: Order,
          },
          ],
        },
      );

      const colors = await Color.findAll();

      const newOrderItems = [];
      for (let i = 0; i < orderItems.length; i += 1) {
        for (let j = 0; j < orders.length; j += 1) {
          if (orderItems[i].order_id === orders[j].dataValues.id) {
            newOrderItems.push(orderItems[i]);
          }
        }
      }
      
      const patterns = await Pattern.findAll();
      const materials = await Material.findAll();

      for (let i = 0; i < newOrderItems.length; i += 1) {
        for (let j = 0; j < patterns.length; j += 1) {
          if (newOrderItems[i].Item.pattern_id === patterns[j].id) {
            newOrderItems[i].dataValues.pattern = patterns[j];
          }
        }
      }

      for (let i = 0; i < newOrderItems.length; i += 1) {
        for (let j = 0; j < materials.length; j += 1) {
          if (newOrderItems[i].Item.material_id === materials[j].id) {
            newOrderItems[i].dataValues.material = materials[j];
          }
        }
      }

      res.json({
        orders,
        colors,
        newOrderItems,
        orderItems,
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
      const re = /^((\+7)+([0-9]){10})$/;

      if (!re.test(body.phone)) {
        res
          .status(400)
          .json({
            orderStatus: false,
            message: 'Что-то пошло не так.',
            validationMessage: 'Номер телефона не соответствует формату.',
          });
      } else {
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
      }
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
  .route('/status')
  .put(async (req, res) => {
    try {
      const { id, status } = req.body;
      const order = await Order.update(
        { status },
        {
          where: { id },
        },
      );

      res.json({
        order,
        id,
        status,
      });
    } catch (error) {
      res.status(400).json({
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
