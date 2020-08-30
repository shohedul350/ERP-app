const express = require('express');
const morgan = require('morgan');
const Cors = require('cors');
const session = require('express-session');

// all middleware in this array
const middleware = [
  morgan('dev'),
  express.urlencoded({ extended: true }),
  express.json(),
  session({
    secret: 'sercret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
  Cors(),
];

module.exports = (app) => {
  middleware.forEach((m) => {
    app.use(m);
  });
};
