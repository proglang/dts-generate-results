  var compare = require('buffer-compare');

  // smaller
  compare(new Buffer('abcd'),new Buffer('abcde')) === -1

  // bigger
  compare(new Buffer('abcdef'),new Buffer('abc')) === 1

  // equal
  compare(new Buffer('hi'),new Buffer('hi')) === 0

