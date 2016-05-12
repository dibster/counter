'use strict';

const Firebase = require('firebase');
const GeoFire = require('geofire');

const userName = '-KGlFEQ_T3uO9BCIbh2R';
const userGeoRef = new Firebase('https://dailycounter.firebaseio.com/counter/geoLocations/' + userName);

const geoFire = new GeoFire(userGeoRef);

geoFire.set("-KGlGLvJFMBbfaBaWNMX", [37.79, -122.41]).then(function() {
  console.log("Provided key has been added to GeoFire");
}, function(error) {
  console.log("Error: " + error);
});

geoFire.set("some_other_key", [37.79, -122.41]).then(function() {
  console.log("Provided key has been added to GeoFire");
}, function(error) {
  console.log("Error: " + error);
});

return
