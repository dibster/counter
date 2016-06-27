'use strict';


function load() {

  const dbObjects = {};
  // Users
  dbObjects.users = 'https://counter-dib.firebaseio.com/counter/users'
  dbObjects.counters = 'https://counter-dib.firebaseio.com/counter/counters'

  return dbObjects;

}

module.exports = load;
