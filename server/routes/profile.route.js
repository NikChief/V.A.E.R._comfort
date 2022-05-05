const router = require('express').Router();
const { Order } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    console.log('servers');
    const ordersHardcode = [{
      id: 1,
      sum: 55,
      status: 'fullfiled',
    },
    {
      id: 4,
      sum: 45,
      status: 'rejected',
    },
    {
      id: 5,
      sum: 35,
      status: 'payed',
    },
    {
      id: 9,
      sum: 35,
      status: 'completed',
    },
    {
      id: 8,
      sum: 55,
      status: 'fullfiled',
    }];

    try {
      console.log('hi');
      res.json({
        orders: [...ordersHardcode],
      });
    } catch (error) {
      res.status(400).json({
        message: `Что-то пошло не так, \n ${error.message}`,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const body = req.body;
      console.log(body, '48')

      if (body.user_id === null) {
        console.log('hi')
        const order = await Order.create({ 
          status: body.status,
          address: body.address,
          phone: Number(body.phone),
        });
      } else {
        const order2 = await Order.create({ body });
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
          message: `Что-то пошло не так, \n ${error.message}`,
        });
    }
  });

module.exports = router;
