const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
     name: {
          type: 'string',   // Changed 'typeof' to 'type'
          required: true,
     },
     price: {
          type: 'number',   // Changed 'typeof' to 'type'
          required: true,
     },
     taste: {
          type: 'string',   // Changed 'typeof' to 'type'
          enum: ['sweet', 'spicy', 'sour'],
     },
     is_drink: {
          type: 'boolean',  // Changed 'typeof' to 'type'
          default: false,
     },
     ingredients: {
          type: [String],   // Changed 'typeof' to 'type'
          default: [],
     },
     num_sales: {
           type: Number,    // Changed 'typeof' to 'type'
           default: 0,
     }
}); 

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
