var bus = require('framebus');

bus.emit('message', {
  from: 'Ron',
  contents: 'they named it...San Diago'
});
