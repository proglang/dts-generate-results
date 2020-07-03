const { format } = require('logform');
const { logstash, combine, timestamp } = format;

const logstashFormat = combine(
  timestamp(),
  logstash()
);

const info = logstashFormat.transform({
  level: 'info',
  message: 'my message'
});

console.log(info);
// { level: 'info',
//   [Symbol(message)]:
//    '{"@message":"my message","@timestamp":"2018-10-02T11:04:52.915Z","@fields":{"level":"info"}}' }
