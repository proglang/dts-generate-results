const { format } = require('logform');

const myFormat = format.printf((info) => {
  return `${info.level} ${info.message}`;
})

const info = myFormat.transform({
  level: 'info',
  message: 'my message'
});

console.log(info);
// { level: 'info',
//   message: 'my message',
//   [Symbol(message)]: 'info my message' }
