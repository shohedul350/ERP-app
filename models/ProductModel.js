const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  unit: {
    type: String,

  },
  image: {
    type: String,

  },
  inCart: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
},
{
  timestamps: true,
});
productSchema.index({ name: 'text'});


productSchema.plugin(mongoosePaginate);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;