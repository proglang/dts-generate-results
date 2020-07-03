const { format } = require('logform');
const LEVEL = Symbol.for('level');

const cliFormat = format.cli({ colors: { info: 'blue' }});

const info = cliFormat.transform({
  [LEVEL]: 'info',
  level: 'info',
  message: 'my message'
}, { all: true });

console.log(info);
// { level: '\u001b[34minfo\u001b[39m',
//   message: '\u001b[34m    my message\u001b[39m',
//   [Symbol(level)]: 'info',
//   [Symbol(message)]:
//    '\u001b[34minfo\u001b[39m:\u001b[34m    my message\u001b[39m' }
