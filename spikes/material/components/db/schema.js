const Realm = require('realm');

const CarSchema = {
  name: 'Car',
  properties: {
    // The following property types are equivalent
    make:   {type: 'string'},
    model: 'string',
  }
}

const PersonSchema = {
  name: 'Person',
  properties: {
    name:     {type: 'string'},               // required property
    birthday: {type: 'date', optional: true}, // optional property

    // object properties are always optional
    car:      {type: 'Car'},
  }
};

let realm = new Realm({schema: [PersonSchema, CarSchema]});

realm.write(() => {
  // optional properties can be set to null or undefined at creation
  let charlie = realm.create('Person', {
    name: 'Charlie',
    birthday: new Date(1995, 11, 25),
    car: null,
  });

  // optional properties can be set to `null`, `undefined`,
  // or to a new non-null value
  charlie.birthday = undefined;
  charlie.car = {make: 'Honda', model: 'Accord', miles: 10000};
});

// let Counters = realm.objects('Counter');
//
// console.log(JSON.stringify(Counters));
