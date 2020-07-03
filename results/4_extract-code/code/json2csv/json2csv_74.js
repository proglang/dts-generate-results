const { parseAsync } = require('json2csv');

const fields = ['field1', 'field2', 'field3'];
const opts = { fields };

parseAsync(myData, opts)
  .then(csv => console.log(csv))
  .catch(err => console.error(err));
