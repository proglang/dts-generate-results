var merge = require('lodash.merge');

var packages = merge(
  require('dep/package.json'),
  require('./package.json')
);

// Utilities
var $ = gulpLoadPlugins({
  config: packages
});

