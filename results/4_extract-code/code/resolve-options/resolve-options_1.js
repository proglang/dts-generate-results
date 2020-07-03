// This example assumes a Vinyl file

var createResolver = require('resolve-options');

var config = {
  cwd: {
    type: 'string',
    default: process.cwd
  },
  sourcemaps: {
    type: 'boolean',
    default: false
  },
  since: {
    type: ['date', 'number']
  },
  read: {
    type: 'boolean'
  }
};

var options = {
  sourcemaps: true,
  since: Date.now(),
  read: function(file) {
    return (file.extname !== '.mp4');
  }
};

var resolver = createResolver(config, options);

var cwd = resolver.resolve('cwd', file);
// cwd === process.cwd()

var sourcemaps = resolver.resolve('sourcemaps', file);
// sourcemaps === true

var read = resolver.resolve('read', file);
// Given .mp4, read === false
// Given .txt, read === true
