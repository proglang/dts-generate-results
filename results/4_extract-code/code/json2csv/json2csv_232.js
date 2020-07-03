const { Parser } = require('json2csv');

const fields = [{
  label: 'Car Name',
  value: 'car'
},{
  label: 'Price USD',
  value: 'price'
}];

const json2csvParser = new Parser({ fields, quote: '' });
const csv = json2csvParser.parse(myCars);

console.log(csv);
