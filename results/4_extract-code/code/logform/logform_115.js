const { format } = require('logform');

const jsonFormat = format.json();

const info = jsonFormat.transform({
  level: 'info',
  message: 'my message',
});
console.log(info);
// { level: 'info',
//   message: 'my message',
//   [Symbol(message)]: '{"level":"info","message":"my message"}' }
