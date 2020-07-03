var format = require('pg-format');
var sql = format('SELECT %1$L, %1$L, %L', 34, 'test');
console.log(sql); // SELECT '34', '34', 'test'
