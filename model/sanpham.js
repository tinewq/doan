const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const sanpham = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  tensp: {
    type: String,
    required: true,
    min: 1,
    max: 256,
    text: true,
  },
  fileanh: {
    type: String,
    required: true,
    min: 1,
    max: 256,
  },
  chitiet: {
    type: String,
    required: true,
    min: 1,
    max: 256,
    text: true,
  },
  gia: {
    type: Number,
    required: true,
    min: 1,
    max: 256,
    text: true,
  },
  maloaisp: {
    type: String,
    required: true,
    min: 1,
    max: 256,
    text: true,
  },
  sl: {
    type: String,
    required: true,
    min: 1,
  },
  hsd: {
    type: String,
    required: true,
    min: 1,
    max: 256,
  },
  phantram: {
    type: Number,
    required: true,
    min: 1,
    max: 256,
  },
  trangthai: {
    type: String,
    required: true,
    min: 1,
    max: 256,
  },
  hieuluc: {
    type: String,
    required: true,
    min: 1,
    max: 256,
  },
  noibat: {
    type: Boolean,
  },
});
sanpham.plugin(mongoosePaginate);
module.exports = mongoose.model('sanphamm', sanpham);
// sub :         table nè : name title, json (schema);