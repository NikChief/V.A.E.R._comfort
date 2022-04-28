const router = require('express').Router();
const bcrypt = require('bcrypt');
// const { User } = require('../db/models');

// router
//   .route('/')
//   // .get((req, res) => {
//   //   res.render('regist');
//   // })
//   .post(async (req, res) => {
//     const {
//       user_name, user_email, user_password, user_repeatPassword,
//     } = req.body;
AbortController
//     const user = await User.findOne({
//       where: {
//         user_email,
//       },
//     });
//     console.log('19', user);
//     if (user) {
//       res.send('Такой пользователь уже существует.');
//     } else if (password !== passwordRepeat) {
//       res.send('Пароли не совпадают.');
//     } else {
//       // const newUser = await User.create({
//       //   username,
//       //   email,
//       //   password: await bcrypt.hash(password, 10),
//       // });
//       req.session.user = newUser;
//       res.redirect('/');
//     }
//   });

module.exports = router;
