var cities = [
  { name: "London", "population": 8615246 },
  { name: "Berlin", "population": 3517424 },
  { name: "Madrid", "population": 3165235 },
  { name: "Rome",   "population": 2870528 }
];

var jp = require('jsonpath');
var names = jp.query(cities, '$..name');

// [ "London", "Berlin", "Madrid", "Rome" ]
