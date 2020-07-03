const { format } = require('logform');
const MESSAGE = Symbol.for('message');

const simpleFormat = format.simple();

const info = simpleFormat.transform({
  level: 'info',
  message: 'my message',
  number: 123
});
console.log(info[MESSAGE]);
// info: my message {number:123}
