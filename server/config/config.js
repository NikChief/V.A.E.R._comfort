require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const signUpCheck = require('../middleware/signupCheck');

const sessionConfig = {
  // будем хранить данные сессии в файлах, а не в оперативной памяти
  // тогда пользователей не будет выкидывать из сессии при перезагрузке сессии
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'secret', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

const config = (app) => {
  // Set
  app.set('view engine', 'hbs');
  app.set('views', path.join(process.env.PWD, 'views'));
  hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

  // Use
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));

  // Sessions
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(signUpCheck);
};

module.exports = config;
