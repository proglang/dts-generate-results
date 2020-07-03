var contentRange = require('content-range');

var header = contentRange.format({
  unit: 'items',
  first: 10,
  limit: 20,
  length: 100
});

console.log(header); // items 10-29/100

// Manually added:
header = contentRange.format({
  unit: 'items',
  first: 10,
  limit: 20,
  length: 100,
  last: 12
});

header = contentRange.format({
  unit: 'items'
});

contentRange.parse("items 10-29/100");