const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  orderNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
  },
  invoice: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invoice',
    },
  ],
  bill: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bill',
    },
  ],
},

{
  timestamps: true,
});
customerSchema.index({ orderNumber: 'text' });

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
