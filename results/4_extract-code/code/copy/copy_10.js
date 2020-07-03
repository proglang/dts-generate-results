var gulp = require('gulp');
var copy = require('copy');

gulp.task('default', function (cb) {
  copy('fixtures/*.txt', 'actual', cb);
});
