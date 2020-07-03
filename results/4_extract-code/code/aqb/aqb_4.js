// in arangosh
var db = require('org/arangodb').db;
var qb = require('aqb');
console.log(db._query(qb.for('x').in('1..5').return('x')).toArray()); // [1, 2, 3, 4, 5]
