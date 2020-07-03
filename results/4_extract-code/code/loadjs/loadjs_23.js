var loadjs = require('loadjs');

loadjs(['/path/to/foo.js', '/path/to/bar.js'], 'foobar');

loadjs.ready('foobar', function() {
  /* foo.js & bar.js loaded */
});
