const { Parser } = require('node-sql-parser');
const parser = new Parser();
const sql = 'UPDATE a SET id = 1 WHERE name IN (SELECT name FROM b)'
const whiteColumnList = ['select::null::name', 'update::a::id'] // array that contain multiple authorities
parser.whiteListCheck(sql, whiteColumnList, 'column') // if check failed, an error would be thrown with relevant error message, if passed it would return undefined
