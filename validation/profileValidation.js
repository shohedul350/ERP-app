const { check } = require('express-validator');

exports.profileValidation = [
  check('companyAuth', 'Company Auth is require')
    .not()
    .isEmpty(),
  check('companyName', 'Company Name is require')
    .not()
    .isEmpty(),
  check('companyAddress', 'Company Address is require')
    .not()
    .isEmpty(),
  check('companyEmail', 'please include valid email')
    .isEmail(),

  check('companyMobile', 'Company Mobile Number is require')
    .not()
    .isEmpty(),
];
