const { check } = require('express-validator');

// register validation
exports.registerValidation = [
  check('userName', 'Name is require')
    .not()
    .isEmpty(),

  check('email', 'please include valid email')
    .isEmail(),

  check('role', 'Role is require')
    .not()
    .isEmpty(),

  check('password',
    'please enter a password with 6 or more characters').isLength({ min: 6 })
    .not()
    .isEmpty(),
];

// login Validation
exports.loginValidation = [
  check('email', 'please include valid email')
    .not()
    .isEmpty()
    .isEmail(),

  check('password',
    'password is require')
    .not()
    .isEmpty(),
];
