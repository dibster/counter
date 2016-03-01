// user model
'use strict'

const User = require('../users');

User.addUser('dadve')
.then(e => {
  console.log(e);
}).catch(err => {
  console.log(err);
});

User.getUser(1)
.then(resp => {
  console.log('ok', resp);
})
.catch(err => {
  console.log('Error', resp);
})

// User.getUser(1,showData);
//
// User.getUser("asd",showData);
// // addUser('dave');
// function showData(resp) {
//   console.log('Response: ',resp);
// }
