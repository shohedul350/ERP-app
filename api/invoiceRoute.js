const router = require('express').Router();
const {
  addInvoice, getInvoices, getInvoice,
} = require('../controller/invoiceController');

const { adminProtect, protect } = require('../middleware/authenticate');

router.route('/invoice').post(adminProtect, addInvoice);
router.route('/invoice/:orderNumber').get(protect, getInvoices);
router.route('/invoice/:id').get(protect, getInvoice);

// router.get('/testinvoice', (req, res) => {
//   res.send('test past invoice');
// });
module.exports = router;
