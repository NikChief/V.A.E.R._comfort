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
          // message: 'Пользователь авторизован.',
          loggedIn: true,
          userId: req.session.userId,
        });
    } else {
      res
        .status(200)
        .json({
          // message: 'Пользователь не авторизован.',
          loggedIn: false,
          userId: req.session.userId,
        });
    }
  })
  .post(async (req, res) => {
    const {
      user_name, user_email, user_password, user_repeatPassword,
    } = req.body;

    const user = await User.findOne({
      where: {
        // eslint-disable-next-line camelcase
        user_email,
      },
    });

    if (user) {
      res
        .status(400)
        .json({
          message: 'Такой пользователь уже существует.',
        });
    } else if (user_password !== user_repeatPassword) {
      res
        .status(400)
        .json({
          message: 'Пароли не совпадают.',
        });
    } else {
      const newUser = await User.create({
        user_name,
        user_email,
        user_password: await bcrypt.hash(user_password, 10),
      });
      req.session.userId = newUser.id;
      res
        .status(200)
        .json({
          message: 'Регистрация успешна.',
          userId: req.session.userId,
        });
    }
  });

module.exports = router;
