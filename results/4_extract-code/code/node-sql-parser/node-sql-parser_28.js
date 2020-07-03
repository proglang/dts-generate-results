const { Parser } = require('node-sql-parser');
const parser = new Parser();
const columnList = parser.columnList('SELECT t.id FROM t');

console.log(columnList); // ["select::t::id"]
