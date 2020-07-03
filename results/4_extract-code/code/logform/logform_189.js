const { format } = require('logform');

const prettyPrintFormat = format.prettyPrint();

const info = prettyPrintFormat.transform({
  [LEVEL]: 'info',
  level: 'info',
  message: 'my message'
});

console.log(info);
// { level: 'info',
//   message: 'my message',
//   [Symbol(level)]: 'info',
//   [Symbol(message)]: '{ level: \'info\', message: \'my message\' }' }
