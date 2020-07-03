var format = require('pg-format');
var sql = format('SELECT * FROM %I WHERE my_col = %L %s', 'my_table', 34, 'LIMIT 10');
console.log(sql); // SELECT * FROM my_table WHERE my_col = '34' LIMIT 10
