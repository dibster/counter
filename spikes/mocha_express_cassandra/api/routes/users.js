const express = require('express')
  , router = express.Router();

const User = require('../models/users');

// Get User From Database using Id
router.get('/:id', function(req, res) {

  User.getUser(req.params.id)
    .then(resp => {
      console.log('ok', resp);
      res.send(resp);
    })
    .catch(err => {
      console.log('Error', resp);
      res.send(resp);
    });

})

module.exports = router;
