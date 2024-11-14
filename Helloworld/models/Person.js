 const mongoose = require('mongoose');
 
// Define the person schema
const personSchema = new mongoose.Schema({
     name: {
          type: 'string',
          required: true
     },
     age:{
          type: 'number'
     },
     work:{
          type: 'string',
          enum: ['chef', 'waiter', 'manager'],
          required: true 
     },
     mobile:{
          type: 'string',
          returns: 'true'
     },
     email:{
          type: 'string',
          required: true,
          unique: true
     },
     address:{
          type: 'string'
     },
     salary:{
          type: 'number',
          returns: true
     }
});

// create person model

const Person = mongoose.model('Person',personSchema);
module.exports = Person;