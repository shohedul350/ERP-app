const { check } = require('express-validator');

exports.uploadValidation = [
    check('name', 'Please provide name')
    .not()
    .isEmpty(),
    
    check('unit', 'please provide Unit')
    .not()
    .isEmpty(),

    check('price', 'Please provide Price')
    .not()
    .isEmpty(),
    
    check('stock', 'Please provide stock')
    .not()
    .isEmpty(),
];
