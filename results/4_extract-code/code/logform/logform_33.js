const { format } = require('logform');
const LEVEL = Symbol.for('level');

const colorizeFormat = format.colorize({ colors: { info: 'blue' }});

const info = colorizeFormat.transform({
  [LEVEL]: 'info',
  level: 'info',
  message: 'my message'
}, { all: true });

console.log(info);
// { level: '\u001b[34minfo\u001b[39m',
//   message: '\u001b[34mmy message\u001b[39m',
//   [Symbol(level)]: 'info' }
