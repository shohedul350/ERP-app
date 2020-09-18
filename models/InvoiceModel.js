const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  customer: {
    type: Object,
    required: true,
  },
  inCart: {
    type: Boolean,
    default: false,
  },
  products: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    qty: {
      type: Number,
      default: 0,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    totalPacking: {
      type: Number,
      default: 0,
      required: true,
    },
    inCart: {
      type: Boolean,
      default: false,
    },
    total: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  ],
},

{
  timestamps: true,
});
invoiceSchema.index({ customer: 'text' });

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
