const mongoose = require('mongoose');

const bill = mongoose.Schema({
    first_name: {
          type: String,
          required: true,
          min: 1,
          max:256
     },
     last_name: {
          type: String,
          required: true,
          min: 1,
          max:256
     },
     street_address: {
          type: String,
          required: true,
          min: 1,
          max:10000
     },
     apartment_address: {
        type: String,
        required: true,
        min: 1,
        max:10000
   },
     phone: {
        type: String,
        required: true,
        min: 1,
        max:10000
   },
   email: {
    type: String,
    required: true,
    min: 1,
    max:10000
},
});

module.exports = mongoose.model('bill', bill);
// sub :         table nè : name title, json (schema);