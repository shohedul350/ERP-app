const { check } = require('express-validator');

exports.customerValidation = [
  check('orderNumber', 'Please provide Order Number')
    .not()
    .isEmpty(),

  check('address', 'please provide Address')
    .not()
    .isEmpty(),

];
