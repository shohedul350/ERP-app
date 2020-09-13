const router = require('express').Router();
const { uploadValidation } = require('../validation/uploadValidation');
const imageupload = require('../middleware/imageUploadMiddleware');
const {
  uploadProduct, getProduct, updateProduct, deleteProduct,
} = require('../controller/productController');

const { adminProtect, protect } = require('../middleware/authenticate');

router.route('/product').post(adminProtect, uploadValidation, imageupload.single('image'), uploadProduct);
router.route('/product').get(protect, getProduct);
router.route('/product/:id').put(adminProtect, updateProduct);
router.route('/product/:id').delete(adminProtect, deleteProduct);

// router.get('/testProduct, (req, res) => {
//   res.send('test past product');
// });
module.exports = router;
