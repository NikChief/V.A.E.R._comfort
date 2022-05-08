require('dotenv').config();
const express = require('express');
const config = require('./config/config');
// пути
const homeRouter = require('./routes/home.routes');
const registrationRouter = require('./routes/registration.routes');
const loginRouter = require('./routes/login.routes');
const logoutRouter = require('./routes/logout.route');
const patternsRouter = require('./routes/patterns.routes');
const profileRouter = require('./routes/profile.route');
const editProfileRouter = require('./routes/editprofile.route');

const app = express();

const port = process.env.PORT ?? 4000;

// config
config(app);

// пути
app.use('/', homeRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/patterns', patternsRouter);
app.use('/profile', profileRouter);
app.use('/editprofile', editProfileRouter);


app.listen(port, () => console.log(`Сервер запущен на порте ${port}`));
