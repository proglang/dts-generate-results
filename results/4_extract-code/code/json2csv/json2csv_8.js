const { Parser } = require('json2csv');

const fields = ['field1', 'field2', 'field3'];
const opts = { fields };

try {
  const parser = new Parser(opts);
  const csv = parser.parse(myData);
  console.log(csv);
} catch (err) {
  console.error(err);
}
