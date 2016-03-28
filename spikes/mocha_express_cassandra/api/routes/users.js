const express = require('express')
  , router = express.Router();

const User = require('../models/users');

// Get User From Database using Id
router.get('/:id', function(req, res) {

  User.getUser(req.params.id)
    .then(resp => {
      res.status(resp.status).json(resp);
    })
    .catch(err => {
      res.status(err.status).json(err);
    });

});

// Get User From Database using Id
router.post('/', function(req, res) {
  User.addUser(req.body)
    .then(resp => {
      res.status(resp.status).json(resp);
    })
    .catch(err => {
      res.status(err.status).json(err);
    });

});

// Delete User From Database using Id
router.delete('/:id', function(req, res) {

  User.deleteUser(req.params.id)
    .then(resp => {
      res.status(resp.status).json(resp);
    })
    .catch(err => {
      console.log(err);
      res.status(err.status).json(err);
    });

});

module.exports = router;
