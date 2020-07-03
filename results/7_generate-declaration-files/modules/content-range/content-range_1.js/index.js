var contentRange = require('content-range');

var header = contentRange.format({
  unit: 'items',
  first: 10,
  limit: 20,
  length: 100
});

console.log(header); // items 10-29/100
