const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('servers')
  const ordersHardcode = [{
    id: 1,
    sum: 55,
    status: 'fullfiled'
  },
  {
    id: 4,
    sum: 45,
    status: 'rejected'
  },
  {
    id: 5,
    sum: 35,
    status: 'payed'
  },
  {
    id: 9,
    sum: 35,
    status: 'completed'
  },
  {
    id: 8,
    sum: 55,
    status: 'fullfiled'
  }]

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
});

module.exports = router;
