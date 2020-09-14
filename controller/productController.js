const { validationResult } = require('express-validator');
const asyncHandler = require('../utilis/async');
const errorFormator = require('../utilis/errorFormater');
const Product = require('../models/ProductModel');

// upload product
exports.uploadProduct = asyncHandler(async (req, res) => {
  const errors = validationResult(req).formatWith(errorFormator);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.mapped(),
    });
  }
  const product = new Product({
    name: req.body.name,
    image: req.file.path,
    unit: req.body.unit,
    price: req.body.price,
    stock: req.body.stock,
  });
  const newProduct = await product.save();
  return res.status(200).json({ msg: 'Product Upload Success', success: true, newProduct });
});

// get all product
exports.getProduct = asyncHandler(async (req, res) => {
  const getAllProduct = await Product.find();
  if (!getAllProduct) {
    return res.status(404).json({ msg: 'Product Not Found' });
  }
  return res.status(200).json({ msg: 'Product get Success', success: true, getAllProduct });
});

// update product
exports.updateProduct = asyncHandler(async (req, res) => {
  const updateProduct = await
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.status(200).json({ msg: 'Product Update Success', success: true, updateProduct });
});

// delete product
exports.deleteProduct = asyncHandler(async (req, res) => {
  const deleteProduct = await
  Product.findByIdAndRemove(req.params.id);
  return res.status(200).json({ msg: 'Product Delete Success', success: true, deleteProduct });
});

// router.get('/search', async (req, res, next) => {
//   try {
//     const product = await Product.find(
//       {
//         $text: { $search: req.query.term },
//       },
//     );
//     res.json(product);
//   } catch (error) {
//     next(error);
//   }
// });
// //  get single product
// //  api/product/getproduct/:id

// router.get('/singleProduct/:id', async (req, res, next) => {
//   try {
//     const getProduct = await Product.findById(req.params.id);
//     if (!getProduct) {
//       return res.status(404).json({ message: 'Product Not Found' });
//     }
//     res.status(200).json(getProduct);
//   } catch (error) {
//     next(error);
//   }
//   return 0;
// });
