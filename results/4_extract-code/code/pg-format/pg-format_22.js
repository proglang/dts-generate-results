var format = require('pg-format');

var myArray = [ 1, 2, 3 ];
var myObject = { a: 1, b: 2 };
var myNestedArray = [['a', 1], ['b', 2]];

var sql = format('SELECT * FROM t WHERE c1 IN (%L) AND c2 = %L', myArray, myObject);
console.log(sql); // SELECT * FROM t WHERE c1 IN ('1','2','3') AND c2 = '{"a":1,"b":2}'

sql = format('INSERT INTO t (name, age) VALUES %L', myNestedArray); 
console.log(sql); // INSERT INTO t (name, age) VALUES ('a', '1'), ('b', '2')
