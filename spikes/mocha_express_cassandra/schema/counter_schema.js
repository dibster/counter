

'use strict'

const DB_IP_ADDRESS = '192.168.99.100';
const KEYSPACE = 'counter'
let query = '';

const cassandra = require('cassandra-driver'),
      client = new cassandra.Client( { contactPoints : [ DB_IP_ADDRESS ], keyspace : KEYSPACE } );

dropAll();

function dropAll() {

  query = 'DROP TABLE Topics';

  client.execute(query,[],function (err,result) {
    if (err) {
      console.error('Error in Drop Table ', err.message);
      createTables();
    } else {
      console.log('Dropped Tables');
      createTables();
    }
  });

}

function createTables() {

  query = `CREATE TABLE Topics(
             id int PRIMARY KEY,
             subject text,
             topic text,
             subject_url text,
             topic_url text)`;

  client.execute(query,[],function (err,result) {
    if (err) {
      console.error('Error in Create Table ', err.message);
    } else {
      console.log('Created Table', result);
      populateTableTopics();
    }
  });

}

function populateTableTopics() {

  const topic = {
    id : 1,
    subject : 'life style',
    topic : 'pub'
  }

  query = `INSERT INTO Topics(
             id,
             subject,
             topic) VALUES (?,?,?)`;

client.execute(query,[1,topic.subject,topic.topic], { prepare: true },function (err,result) {
  if (err) {
    console.error('Error Adding Data ', err.message);
  } else {
     console.log('Added Data ', result);
     client.shutdown();
     return;
  }

});


}

// client.on('log', function(level, className, message, furtherInfo) {
//   console.log('log event: %s -- %s', level, message);
// });
