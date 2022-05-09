/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .post(async (req, res) => {
    try {
      const {
        name, email, password, repeatPassword,
      } = req.body;

      const user = await User.findOne({
        where: {
          // eslint-disable-next-line camelcase
          email,
        },
      });

      if (user) {
        res
          .status(400)
          .json({
            loggedIn: false,
            message: 'Такой пользователь уже существует.',
          });
      } else if (password !== repeatPassword) {
        res
          .status(400)
          .json({
            loggedIn: false,
            message: 'Пароли не совпадают.',
          });
      } else if (password.length < 8) {
        res
          .status(400)
          .json({
            loggedIn: false,
            message: 'Пароль содержит меньше 8 символов.',
          });
      } else {
        const newUser = await User.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
        });

        req.session.userId = newUser.id;
        req.session.userEmail = newUser.email;
        req.session.userName = newUser.name;
        req.session.userIsAdmin = newUser.isAdmin;

        res
          .status(200)
          .json({
            loggedIn: true,
            message: 'Регистрация успешна.',
            userId: req.session.userId,
            userEmail: req.session.userEmail,
            userName: req.session.userName,
            userIsAdmin: req.session.userIsAdmin,
          });
      }
    } catch (error) {
      res
        .status(400)
        .json({
          message: `Что-то пошло не так. Описание ошибки: ${error.message}`,
        });
    }
  });

module.exports = router;
