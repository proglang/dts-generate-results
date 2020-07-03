
var defaults = require('defaults');

var handle = function(options, fn) {
  options = defaults(options, {
    timeout: 100
  });

  setTimeout(function() {
    fn(options);
  }, options.timeout);
}

handle({ timeout: 1000 }, function() {
  // we're here 1000 ms later
});

handle({ timeout: 10000 }, function() {
  // we're here 10s later
});

