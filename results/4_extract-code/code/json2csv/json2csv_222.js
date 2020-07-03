const { Parser } = require('json2csv');

const fields = ['car', 'price', 'color'];

const json2csvParser = new Parser({ fields, delimiter: '\t' });
const tsv = json2csvParser.parse(myCars);

console.log(tsv);
