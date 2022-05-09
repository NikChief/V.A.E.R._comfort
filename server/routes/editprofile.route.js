/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .post(async (req, res) => {
    try {
      let {
        name, email, password,
      } = req.body;
      console.log('=====>>>>', name, email, password)
      if (name === '') { name = req.session.userId; }
      if (email === '') { email = req.session.userEmail; }
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
        const user1 = await User.findOne({
          where: {
            id: req.session.userId,
          },
        });
        if (password === '') { password = user1.password; } else {
          password = await bcrypt.hash(password, 10)
        }
        await User.update({
          name,
          email,
          password,
        }, {
          where: {
            id: req.session.userId,
          },
        });
        req.session.destroy();
        res.clearCookie('user_sid');
        res.json({
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
