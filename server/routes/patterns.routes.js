const router = require('express').Router();
// const { Pattern } = require('../db/models');

router
  .route('/:id')
  .get((req, res) => {
    // async выше надо добавить
    // const { id } = req.params;

    // const pattern = await Pattern.findByPk(id);
    const pattern = {
      id: 1001,
      name: 'Костюм такой-то',
      image: 'https://sun9-17.userapi.com/s/v1/ig2/YXXIy-4jEn-xG26zXokIDItqcqD4lUxPnl662be6tLfWTX8bYiXMERx17WOekiHrTk8IkbK4gjyoSz4CyjAVmP9g.jpg?size=607x1080&quality=95&type=album',
      category_type_id: 1,
      color_count: 3,
      size_type_id: 1,
    };

    res
      .status(200)
      .json(pattern);
  });

// router
//   .route('/logout')
//   .get((req, res) => {
//     req.session.destroy();
//     res.redirect('/');
//   });


// const patterns = [
//   {
//     id: 1001,
//     name:'Костюмы',
//     image:'https://sun9-17.userapi.com/s/v1/ig2/YXXIy-4jEn-xG26zXokIDItqcqD4lUxPnl662be6tLfWTX8bYiXMERx17WOekiHrTk8IkbK4gjyoSz4CyjAVmP9g.jpg?size=607x1080&quality=95&type=album',
//     category_type_id: 1,
//     color_count: 3
//   }, 
//   {
//     id: 1002,
//     name:'Костюмы',
//     image:'https://sun9-17.userapi.com/s/v1/ig2/YXXIy-4jEn-xG26zXokIDItqcqD4lUxPnl662be6tLfWTX8bYiXMERx17WOekiHrTk8IkbK4gjyoSz4CyjAVmP9g.jpg?size=607x1080&quality=95&type=album',
//     category_type_id: 2,
//     color_count: 3
//   }, 
//   {
//     id: 1003,
//     name:'Костюмы',
//     image:'https://sun9-17.userapi.com/s/v1/ig2/YXXIy-4jEn-xG26zXokIDItqcqD4lUxPnl662be6tLfWTX8bYiXMERx17WOekiHrTk8IkbK4gjyoSz4CyjAVmP9g.jpg?size=607x1080&quality=95&type=album',
//     category_type_id: 2,
//     color_count: 3
//   }, 
//   {
//     id: 1004,
//     name:'Костюмы',
//     image:'https://sun9-17.userapi.com/s/v1/ig2/YXXIy-4jEn-xG26zXokIDItqcqD4lUxPnl662be6tLfWTX8bYiXMERx17WOekiHrTk8IkbK4gjyoSz4CyjAVmP9g.jpg?size=607x1080&quality=95&type=album',
//     category_type_id: 2,
//     color_count: 3
//   }, 
//   {
//     id: 1005,
//     name:'Футболки',
//     image:'https://sun9-61.userapi.com/s/v1/ig2/gSj6Fw_sIPMYHlkSMUy-BSocoFYVDbEOee1__c9KSGr2RtYR1p-qjIebSKmaLedcX1m-pF2H1xprMcP64cfLu9cO.jpg?size=720x1080&quality=95&type=album',
//     category_type_id: 2,
//     color_count: 3
//   }, 
// ];
module.exports = router;
