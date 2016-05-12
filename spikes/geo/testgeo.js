'use strict'

const points = [
  {lat: 10, lon: 20, place : 'A'},
  {lat: 12, lon: 18, place : 'B'},
  {lat: 11, lon: 19, place : 'C'},
  {lat: 5, lon: 40, place : 'D'},
  {lat: 100, lon: 2, place : 'E'}
];

function d(point) {
  return Math.pow(point.lat, 2) + Math.pow(point.lon, 2);
}

let closest = points.slice(1).reduce(function(min, p) {
  if (d(p) < min.d) min.point = p;
  return min;
}, {point: points[0], d:d(points[0])}).point;

console.log(closest.place);
