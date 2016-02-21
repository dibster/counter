var cassandra = require('cassandra-driver')

var client = new cassandra.Client( { contactPoints : [ '192.168.99.100' ], keyspace : 'counter' } );

//
// client.connect(function(err, result) {
//   console.log('Connected');
// });




var query = 'SELECT * FROM counter.topics;';
//
client.execute(query, [], function(err, result) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('executed' + JSON.stringify(result.rows));
    return
  }
  return;
});

return
// }
