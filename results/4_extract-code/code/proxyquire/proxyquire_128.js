var fs = require('fs')
  , C = require('C');

// will get executed twice
var file = fs.openSync('/tmp/foo.txt', 'w');

module.exports = function() {
  return new C(file);
};
