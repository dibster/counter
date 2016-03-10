const express = require('express')
  , router = express.Router();

router.use('/users', require('./users'));

router.post('/ping', function(req, res) {
  console.log('ping : ', req.body);
  res.send('A Test');
});

module.exports = router;
