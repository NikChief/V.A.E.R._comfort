/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const router = require('express').Router();
const { User } = require('../db/models');

router
  .route('/')
  .post(async (req, res) => {
    try {
      const {
        name, email,
      } = req.body;
      // console.log(name, email);
      const user = await User.findOne({
        where: {
          email,
        },
      });
      // console.log(user);
      if (user) {
        res
          .status(400)
          .json({
            // loggedIn: false,
            message: 'Пользователь с таким e-mail уже существует.',
          });
      } else {
        await User.update({
          name,
          email,
        }, {
          where: {
            id: req.session.userId,
          },
        });
        req.session.destroy();
        res.clearCookie('user_sid');
        res.send({
          message: 'Вы вышли из своего профиля',
          successLogout: true,
        });
      }
    }
    catch (error) {
      res.status(400).json({
        message: `Ошибка выхода из профиля, \n ${error.message}`,
        successLogout: false,
      });
    }
  });

module.exports = router;
