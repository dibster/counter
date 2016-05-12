'use strict';

const Firebase = require('firebase');
const Users = new Firebase('https://dailycounter.firebaseio.com/counter/users');
const Counters = new Firebase('https://dailycounter.firebaseio.com/counter/counters');

let newUser = Users.push({
  email : "dave_ashenhurst@hotmail.com",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  },
  name : 'Dave',
  surname : 'Ashenhurst'
});

console.log(newUser.key());

let newCounter = Counters.push({
  userRef : newUser.key(),
  counter : 'Pints',
  Value : 34,
  lat : 1234,
  lon : 1233,
  timestamp : new Date().getTime()
});





return
