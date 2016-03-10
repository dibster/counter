const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
