'use strict'
//npm
const Firebase = require('firebase');
//local
const FirebaseConfig = require ('./FirebaseConfig.js');
// get firebase locations
const options = FirebaseConfig();
// assign Objects
const Users = new Firebase(options.users);
const Counters = new Firebase(options.counters);


// Add value to Counter (can be -ve)
function AddCounter(userRef, counter, value) {

  // will add counter and Reference.


  // get geoloaction

  // get timestamp

}

function addUser(userdetails) {

  let newUser = options.push({
    email : "dave_ashenhurst@hotmail.com",
    location: {
      city: "San Francisco",
      state: "California",
      zip: 94103
    },
    name : 'Dave',
    surname : 'Ashenhurst'
  });

}
