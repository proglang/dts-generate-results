const { format } = require('logform');

const labelFormat = format.label();

const info = labelFormat.transform({
  level: 'info',
  message: 'my message'
}, { label: 'my label', message: true });

console.log(info);
// { level: 'info', message: '[my label] my message' }
