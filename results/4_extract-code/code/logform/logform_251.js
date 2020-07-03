const { format } = require('logform');

const splatFormat = format.splat();

const info = splatFormat.transform({
  level: 'info',
  message: 'my message %s',
  splat: ['test', { thisIsMeta: true }]
});

console.log(info);
// { level: 'info',
//   message: 'my message test',
//   thisIsMeta: true,
//   splat: [ 'test' ] }
