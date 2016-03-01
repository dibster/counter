'use strict'

const DB_IP_ADDRESS = '192.168.99.100';
const KEYSPACE = 'counter'
let query = '';

const cassandra = require('cassandra-driver'),
      client = new cassandra.Client( { contactPoints : [ DB_IP_ADDRESS ], keyspace : KEYSPACE } );

const tables = ['Topics', 'Users'];

dropAll();

function dropAll() {
  const numberoftables = tables.length;
  let iterator = 0;

  tables.map(table => {

    query = 'DROP TABLE ' + table;
    client.execute(query,[],function (err,result) {
      iterator++;
      if (err) {
        console.error('Error in Drop Table ', err.message);
      } else {
        console.log('Dropped Tables');
      }
      if (iterator === numberoftables) {
        createTables();
      }
    });

  })



}

function createTables() {

  let createTablesArray = [];

  let tableDDL = `CREATE TABLE Topics(
             id int,
             subject text,
             topic text,
             subject_url text,
             topic_url text,
             measure text,
             PRIMARY KEY (subject,topic))`;

  createTablesArray.push(tableDDL);

  tableDDL = `CREATE TABLE Users(
             id int,
             name text,
             email text,
             lastUsedPlace text,
             lastUsedTime int,
             PRIMARY KEY (id,email))`;

  createTablesArray.push(tableDDL);

  tableDDL = `CREATE TABLE UserPreferences(
               userid int,
               topicid int,
               timeused int,
               latused int,
               lonused int,
               PRIMARY KEY (userid,topicid))`;

  createTablesArray.push(tableDDL);
  const numberoftables = createTablesArray.length;
  let iterator = 0;

  createTablesArray.map(table => {
    client.execute(table,[],function (err,result) {
      iterator++;
      if (err) {
        console.error('Error in Create Table ', err.message);
      } else {
        console.log('Created Table');
      }
      if (iterator === numberoftables) {
        // populateTableTopics();
        populateTableUsers();
      }
    });

  });

}

function populateTableUsers() {

  const users = [
    {
      id : 1,
      name : 'Dave',
      email : 'dave.ashenhurst@evrythng.com'

    },
    {
      id : 2,
      name : 'Gareth',
      email : 'berto@hotmail.com'
    }
  ]
  const numberofusers = users.length;
  let iterator = 0;


  query = `INSERT INTO Users(
               id,
               name,
               email) VALUES (?,?,?)`;

  users.map(user => {

    client.execute(query,[user.id,user.name,user.email], { prepare: true },function (err,result) {
      if (err) {
        console.error('Error Adding Data ', err.message);
      } else {
         console.log('Added Data ');
         iterator++;
         if (iterator === numberofusers) {
           closeConnection();
         }
         return;
      }
    });

  });


}


function populateTableTopics() {

  const topics = [
    {
      id : 1,
      subject : 'life style',
      topic : 'pub',
      measure : 'number'

    },
    {
      id : 2,
      subject : 'life style',
      topic : 'ruby'
    },
    {
      id : 3,
      subject : 'life style',
      topic : 'flat white'
    },
    {
      id : 4,
      subject : 'exercise',
      topic : 'gym'
    },
    {
      id : 5,
      subject : 'exercise',
      topic : 'planks'
    },
    {
      id : 6,
      subject : 'exercise',
      topic : 'runs'
    }
  ]
  const numberoftopics = topics.length;
  let iterator = 0;


  query = `INSERT INTO Topics(
               id,
               subject,
               topic,
               measure) VALUES (?,?,?,?)`;

  topics.map(topic => {

    client.execute(query,[topic.id,topic.subject,topic.topic,topic.measure], { prepare: true },function (err,result) {
      if (err) {
        console.error('Error Adding Data ', err.message);
      } else {
         console.log('Added Data ');
         iterator++;
         if (iterator === numberoftopics) {
           closeConnection();
         }
         return;
      }
    });

  });


}

function closeConnection() {
  console.log('Finished...');
  client.shutdown();
}

// client.on('log', function(level, className, message, furtherInfo) {
//   console.log('log event: %s -- %s', level, message);
// });
