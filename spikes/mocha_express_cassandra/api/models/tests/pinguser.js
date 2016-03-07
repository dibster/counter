// user model
'use strict'

const User = require('../users');

User.addUser('davde')
  .then(resp => {
    console.log('Added ok', resp);
  }).catch(err => {
    console.log('Error on Add', err);
  });

User.getUser(1)
  .then(resp => {
    console.log('ok', resp);
  })
  .catch(err => {
    console.log('Error', resp);
  });

  
