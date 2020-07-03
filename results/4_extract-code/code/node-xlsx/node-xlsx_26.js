import xlsx from 'node-xlsx';
// Or var xlsx = require('node-xlsx').default;

const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
const range = {s: {c: 0, r:0 }, e: {c:0, r:3}}; // A1:A4
const options = {'!merges': [ range ]};

var buffer = xlsx.build([{name: "mySheetName", data: data}], options); // Returns a buffer
