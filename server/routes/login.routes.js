/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  // .get((req, res) => {
  //   res.render('login');
  // })
  .post(async (req, res) => {
    try {
      const {
        user_email, user_password,
      } = req.body;

      const user = await User.findOne({
        where: {
          user_email,
        },
      });

      if (user && await bcrypt.compare(user_password, user.password)) {
        req.session.user = user;
        res
          .status(200)
          .json({
            message: 'Вход на сайт успешен.',
          });
      } else {
        res
          .status(400)
          .json({
            message: 'Неправильный адрес электронной почты или пароль.',
          });
      }
    } catch (error) {
      res
        .status(400)
        .json({
          message: `Ошибка регистрации, \n ${error.message}`,
        });
    }
  });

module.exports = router;
