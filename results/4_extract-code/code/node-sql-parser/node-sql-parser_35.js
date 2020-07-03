const { Parser } = require('node-sql-parser');
const parser = new Parser();
const sql = 'UPDATE a SET id = 1 WHERE name IN (SELECT name FROM b)'
const whiteTableList = ['(select|update)::(.*)::(a|b)'] // array that contain multiple authorities
parser.whiteListCheck(sql, whiteTableList, 'table') // if check failed, an error would be thrown with relevant error message, if passed it would return undefined
