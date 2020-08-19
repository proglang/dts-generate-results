var fs = require('fs');
var eos = require('then-eos');

var stream = fs.createReadStream('LICENSE');

eos(stream).then(function () {
  // Reached end of the stream
});
