const Customer = require('../models/CustomerModel');
const asyncHandler = require('../utilis/async');

// add customer
exports.addCustomer = asyncHandler(async (req, res) => {
  const customer = new Customer({
    orderNumber: req.body.orderNumber,
    address: req.body.address,
    mobile: req.body.mobile,
    email: req.body.email,
  });
  const newCustomer = await customer.save();
  return res.status(200).json({ msg: 'Customer Create Succesfully', success: true, newCustomer });
});

// get all customers
exports.getCustomers = asyncHandler(async (req, res) => {
  const getCustomers = await Customer.find();
  if (!getCustomers) {
    return res.status(404).json({ msg: 'Customers Not Found', success: false });
  }
  return res.status(200).json({ msg: 'customers loaded', success: true, getCustomers });
});

// get single customer customer
exports.getCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    return res.status(404).json({ msg: 'customer Not Found', success: false });
  }
  return res.status(200).json({ msg: 'customer loaded', success: true, customer });
});

// update customer
exports.updateCustomer = asyncHandler(async (req, res) => {
  const updateCustomer = await
  Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.status(200).json({ msg: 'customer Update Success', success: true, updateCustomer });
});

// delete customer
exports.deleteCustomer = asyncHandler(async (req, res) => {
  const deleteCustomer = await
  Customer.findByIdAndRemove(req.params.id);
  return res.status(200).json({ msg: 'customer Delete Success', success: true, deleteCustomer });
});

// search  customer
exports.searchCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.find(
    {
      $text: { $search: req.query.term },
    },
  );
  return res.status(200).json({ msg: 'search loaded', success: true, customer });
});
