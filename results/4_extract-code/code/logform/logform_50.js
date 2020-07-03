const { format } = require('logform');
const { combine, timestamp, json } = format;

const jsonWithTimestamp = combine(
  timestamp(),
  json()
);

const info = jsonWithTimestamp.transform({
  level: 'info',
  message: 'my message'
});

console.log(info);
// { level: 'info',
//   message: 'my message',
//   timestamp: '2018-10-02T15:03:14.230Z',
//   [Symbol(message)]:
//    '{"level":"info","message":"my message","timestamp":"2018-10-02T15:03:14.230Z"}' }
