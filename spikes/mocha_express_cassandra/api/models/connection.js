'use strict';

const DB_IP_ADDRESS = '192.168.99.100';
const KEYSPACE = 'counter'
let query = '';

const cassandra = require('cassandra-driver'),
      dbClient = new cassandra.Client( { contactPoints : [ DB_IP_ADDRESS ], keyspace : KEYSPACE } );

module.exports=dbClient;
