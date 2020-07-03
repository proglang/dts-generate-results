const { format } = require('logform');

const metadataFormat = format.metadata();

const info = metadataFormat.transform({
  level: 'info',
  message: 'my message',
  meta: 42
});

console.log(info);
// { level: 'info', message: 'my message', metadata: { meta: 42 } }
