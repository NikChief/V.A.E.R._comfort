/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    if (req.session.userId) {
      res
        .status(200)
        .json({
          loggedIn: true,
          userId: req.session.userId,
        });
    } else {
      res
        .status(200)
        .json({
          loggedIn: false,
        });
    }
  })
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
      if (user && await bcrypt.compare(user_password, user.user_password)) {
        req.session.userId = user.id;
        res
          .status(200)
          .json({
            loggedIn: true,
            message: 'Вход на сайт успешен.',
            userId: req.session.userId,
          });
      } else {
        res
          .status(400)
          .json({
            loggedIn: false,
            message: 'Неправильный адрес электронной почты или пароль.',
          });
      }
    } catch (error) {
      res
        .status(400)
        .json({
          loggedIn: false,
          message: `Ошибка регистрации, \n ${error.message}`,
        });
    }
  });

module.exports = router;
