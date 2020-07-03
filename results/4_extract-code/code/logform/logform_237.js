const { format } = require('logform');

const splatFormat = format.splat();

const info = splatFormat.transform({
  level: 'info',
  message: 'my message %s',
  splat: ['test']
});

console.log(info);
// { level: 'info', message: 'my message test', splat: [ 'test' ] }
