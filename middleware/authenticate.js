const passport = require('passport');

// some route route protected for user
exports.protect = (req, res, next) => {
  passport.authenticate('jwt', (err, auth, info) => {
    if (err) {
      console.log(info);
      console.log(err);
      return next(err);
    }
    if (!auth) {
      return res.status(400).json({
        msg: 'Authentication Failed ...',
      });
    }

    req.auth = auth;
    return next();
  })(req, res, next);
};

// all route procted for admin
exports.adminProtect = (req, res, next) => {
  passport.authenticate('jwt', (err, auth, info) => {
    if (err) {
      console.log(info);
      console.log(err);
      return next(err);
    }
    if (!auth) {
      return res.status(400).json({
        msg: 'Authentication Failed ...',
      });
    }
    if (auth.role !== 'admin') {
      return res.status(400).json({ msg: 'Authentication Failed ...' });
    }
    req.auth = auth;
    return next();
  })(req, res, next);
};
