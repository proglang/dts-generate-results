const { Parser } = require('json2csv');
const fields = ['car', 'color'];

const json2csvParser = new Parser({ fields });
const csv = json2csvParser.parse(myCars);

console.log(csv);
