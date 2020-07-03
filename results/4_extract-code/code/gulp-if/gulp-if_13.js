var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var beautify = require('gulp-beautify');

var condition = function (file) {
  // TODO: add business logic
  return true;
}

gulp.task('task', function() {
  gulp.src('./src/*.js')
    .pipe(gulpif(condition, uglify(), beautify()))
    .pipe(gulp.dest('./dist/'));
});
