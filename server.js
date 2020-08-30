const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const uri = process.env.ATLAS_URI;
// import all middleware
const setMiddleware = require('./middleware/middlewares');
// import all route
const setRoutes = require('./api/index');

const app = express();
app.use(cors());

// passport setup
app.use(passport.initialize());
require('./passport')(passport);

// using middleware
setMiddleware(app);

// using routes
setRoutes(app);
app.use('/public', express.static('public'));
const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// error handle

app.use((req, res, next) => {
  const error = new Error('404 Page Not Found');
  error.status = 404;
  next(error);
});
app.use((error, req, res) => {
  if (error.status === 404) {
    return res.json({ msg: 'page not found' });
  }
  console.log(error);
  return res.json(error);
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

mongoose.connection.once('open', () => {
  console.log('mongodb connection establish succesfully');
});
app.listen(port, () => { console.log(`The app is running on port ${port}`); });
