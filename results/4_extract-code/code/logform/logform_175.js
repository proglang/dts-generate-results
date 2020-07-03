const { format } = require('logform');
const LEVEL = Symbol.for('level');

const padLevelsFormat = format.padLevels();

const info = padLevelsFormat.transform({
  [LEVEL]: 'info',
  message: 'my message'
});

console.log(info);
// { message: '    my message', [Symbol(level)]: 'info' }
