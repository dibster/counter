const express = require('express')
  , router = express.Router();

router.use('/users', require('./users'));

router.get('/test', function(req, res) {
  res.send('A Test')
})

module.exports = router;
