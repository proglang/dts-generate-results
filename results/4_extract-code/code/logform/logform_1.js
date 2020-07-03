const { format } = require('logform');

const alignFormat = format.align();

const info = alignFormat.transform({
  level: 'info',
  message: 'my message'
});

console.log(info);
// { level: 'info', message: '\tmy message' }
