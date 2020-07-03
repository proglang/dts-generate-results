var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var lazypipe = require('lazypipe');

var linting = false;
var compressing = false;

var jshintChannel = lazypipe()
  // adding a pipeline step
  .pipe(jshint) // notice the stream function has not been called!
  .pipe(jshint.reporter)
  // adding a step with an argument
  .pipe(jshint.reporter, 'fail');

gulp.task('scripts', function () {
  return gulp.src(paths.scripts.src)
    .pipe(gulpif(linting, jshintChannel()))
    .pipe(gulpif(compressing, uglify()))
    .pipe(gulp.dest(paths.scripts.dest));
});
