/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
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
          loggedIn: false,
          message: 'Такой пользователь уже существует.',
        });
    } else if (user_password !== user_repeatPassword) {
      res
        .status(400)
        .json({
          loggedIn: false,
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
          loggedIn: true,
          message: 'Регистрация успешна.',
          userId: req.session.userId,
        });
    }
  });

module.exports = router;
