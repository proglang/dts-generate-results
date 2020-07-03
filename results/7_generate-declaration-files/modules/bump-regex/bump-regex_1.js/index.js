
var bump = require('bump-regex');

bump('version: "0.1.2"', function(err, out) {
  // => 'version: "0.1.3"'
});
