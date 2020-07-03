const { format } = require('logform');

const timestampFormat = format.timestamp();

const info = timestampFormat.transform({
  level: 'info',
  message: 'my message'
});

console.log(info);
// { level: 'info',
//   message: 'my message',
//   timestamp: '2018-10-02T11:47:02.682Z' }
