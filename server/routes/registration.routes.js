/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const PasswordValidator = require('password-validator');
const validator = require('email-validator');
const { User } = require('../db/models');

const schema = new PasswordValidator();
schema.is().min(8);
schema.has().uppercase();
schema.has().lowercase();
schema.has().digits(1);
schema.has().not().spaces();

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
      } else if (!validator.validate(email)) {
        res
          .status(400)
          .json({
            loggedIn: false,
            message: 'Некорректная электронная почта.',
          });
      } else if (password !== repeatPassword) {
        res
          .status(400)
          .json({
            loggedIn: false,
            message: 'Пароли не совпадают.',
          });
      } else if (!schema.validate(password)) {
        res
          .status(400)
          .json({
            loggedIn: false,
            message: 'Пароль не соответствует требованиям безопасности.',
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
