const { Parser } = require('node-sql-parser');
const parser = new Parser()
const { tableList, columnList, ast } = parser.parse('SELECT * FROM t');
