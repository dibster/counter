'use strict';

const Realm = require('realm');

const CountSchema = {
  name: 'Counter',
  properties: {
    counter:  'string',
    value : {type: 'int', default: 0},
    timestamp : {type :'float', optional: true},
    lat : {type: 'float', optional: true},
    lon : {type: 'float', optional: true}
  }
};

const PersonSchema = {
  name: 'Person',
  properties: {
    name:     'string',
    birthday: 'date',
    cars:     {type: 'list', objectType: 'Counter'},
    picture:  {type: 'data', optional: true} // optional property
  }
};

// Initialize a Realm with Car and Person models
let counterDb = new Realm({schema: [CountSchema, PersonSchema]});

// counterDb.write(() => {
//   counterDb.deleteAll();
// });

module.exports = counterDb;
