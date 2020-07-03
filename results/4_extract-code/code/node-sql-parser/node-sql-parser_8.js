const { Parser } = require('node-sql-parser');
const parser = new Parser()
const ast = parser.astify('SELECT * FROM t');
const sql = parse.sqlify(ast);

console.log(sql); // SELECT * FROM `t`
