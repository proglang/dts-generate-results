const { Parser } = require('node-sql-parser');
const parser = new Parser();
const tableList = parser.tableList('SELECT * FROM t');

console.log(tableList); // ["select::null::t"]
