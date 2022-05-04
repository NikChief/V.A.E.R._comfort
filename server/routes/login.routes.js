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
          userName: req.session.userName,
          userEmail: req.session.userEmail,
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
        email, password,
      } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user.id;
        req.session.userEmail = user.email;
        req.session.userName = user.name;
        res
          .status(200)
          .json({
            loggedIn: true,
            message: 'Вход на сайт успешен.',
            userId: req.session.userId,
            userEmail: req.session.userEmail,
            userName: req.session.userName,
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
