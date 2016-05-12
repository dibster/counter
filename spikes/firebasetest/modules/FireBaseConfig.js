'use strict';


function load() {

  const dbObjects = {};
  // Users
  dbObjects.users = 'https://dailycounter.firebaseio.com/counter/users'
  dbObjects.counters = 'https://dailycounter.firebaseio.com/counter/counters'

  return dbObjects;

}

module.exports = load;
