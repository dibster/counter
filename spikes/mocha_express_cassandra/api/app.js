const express = require('express'),
    app = express(),
    cassandra = require('cassandra-driver'),
    client = new cassandra.Client( { contactPoints : [ '192.168.99.100' ], keyspace : 'counter' } );


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/topics', function (req, res) {

  const query = 'SELECT * FROM counter.topics;';
  //
  client.execute(query, [], function(err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log('executed' + JSON.stringify(result.rows));
      res.send(result.rows);
    }
    return;
  });


});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
