const asyncHandler = require('../utilis/async');
const Invoice = require('../models/InvoiceModel');
const Customer = require('../models/CustomerModel');
const Product = require('../models/ProductModel');

// add invoice
exports.addInvoice = asyncHandler(async (req, res) => {
  const customer = req.body.customerObject
  const products = req.body.products

  const invoice = new Invoice({
    orderNumber: customer.orderNumber,
    customer,
    products,
  });
  const newInvoice = await invoice.save();
  await Customer.findOneAndUpdate(
    { _id: customer.customerId },
    { $push: { 'invoice': newInvoice._id }});

  products.map(async (product) => {
    await Product.findOneAndUpdate(
      { _id: product._id },
      { $set: { stock: product.stock } },
    );
  });
  return res.status(200).json({ msg: 'Invoice Create Success', success: true, newInvoice });
});

// get invoices
exports.getInvoices = asyncHandler(async (req, res) => {
  const orderNumber = req.params.orderNumber

  const getAllInvoice = await Invoice.find({ orderNumber });
  if (!getAllInvoice.length) {
    return res.status(404).json({ msg: 'Invoice Not Found', success: false });
  }
  return res.status(200).json({ msg: 'invoice loaded', success: true, getAllInvoice });
});

// get invoices
exports.getInvoice = asyncHandler(async (req, res) => {
  const invoiceId = req.params.id
  const invoice = await Invoice.findById(invoiceId);
  if (!invoice) {
    return res.status(404).json({ msg: 'invoice Not Found' });
  }
  return res.status(200).json({ msg: 'Invoice Create Success', success: true, invoice });
});
