// foo.js
var bar = require('./bar');

module.exports = function() {
  bar();
}

// bar.js
var baz = require('./baz');

module.exports = function() {
  baz.method();
}

// baz.js
module.exports = {
  method: function() {
    console.info('hello');
  }
}

// test.js
var stubs = {
  './baz': {
    method: function(val) {
      console.info('goodbye');
    },
    '@global': true
  }
};

var proxyquire = require('proxyquire');

var foo = proxyquire('./foo', stubs);
foo();  // 'goodbye' is printed to stdout
