var bus = require('framebus');

bus.on('message', function (data) {
  console.log(data.from + ' said: ' + data.contents);
});
