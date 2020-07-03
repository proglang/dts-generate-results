var overridePlugins = require('gulp-load-plugins')({
  // true is the default value
  overridePattern: true,
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*', 'foo-bar']
});

var extendedPlugins = require('gulp-load-plugins')({
  overridePattern: false,
  pattern: ['foo-bar']
});
