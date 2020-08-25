const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt  = require('passport-jwt').ExtractJwt;

const Auth = require('./models/AuthModel');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SERCRET;

module.exports = (passport) => {
  passport.use(new JwtStrategy(opts, ({ _id }, done) => {
    Auth.findOne({ _id })
      .then((auth) => {
        if (!auth) {
          return done(null, false);
        }
        return done(null, auth);
      })
      .catch((error) => {
        console.log(error);
        return done(error);
      });
  }));
};
