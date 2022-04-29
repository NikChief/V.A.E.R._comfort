const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.send({
      message: 'Вы вышли из своего профиля',
      successLogout: true,
    });
  } catch (error) {
    res.status(400).json({
      message: `Ошибка выхода из профиля, \n ${error.message}`,
      successLogout: false,
    });
  }
});

module.exports = router;
