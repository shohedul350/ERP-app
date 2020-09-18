const router = require('express').Router();
const { customerValidation } = require('../validation/customerValidation');

const {
  addCustomer, getCustomers, getCustomer, deleteCustomer, updateCustomer, searchCustomer,
} = require('../controller/customerController');

const { adminProtect, protect } = require('../middleware/authenticate');

router.route('/customer').post(adminProtect, customerValidation, addCustomer);
router.route('/customers').get(protect, getCustomers);
router.route('/customer/:id').get(protect, getCustomer);
router.route('/customer/:id').put(adminProtect, updateCustomer);
router.route('/customer/:id').delete(adminProtect, deleteCustomer);
router.route('/customer/:text').delete(adminProtect, searchCustomer);

// router.get('/testCustomer, (req, res) => {
//   res.send('test past customer');
// });
module.exports = router;
