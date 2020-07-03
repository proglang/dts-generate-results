var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var compressing = false;

var jsChannel = lazypipe()
  // adding a pipeline step
  .pipe(jshint) // notice the stream function has not been called!
  .pipe(jshint.reporter)
  // adding a step with an argument
  .pipe(jshint.reporter, 'fail')
  // adding a step with multiple arguments
  .pipe(concat, 'bundle.js', {newLine: ';'})
  // you can't say: .pipe(gulpif, compressing, uglify)
  // because uglify needs to be instantiated separately in each lazypipe instance
  // you can say this instead:
  .pipe(function () {
    return gulpif(compressing, uglify());
  });
  // why does this work? lazypipe calls the function, passing in the no arguments to it,
  // it instantiates a new gulp-if pipe and returns it to lazypipe.

gulp.task('scripts', function () {
  return gulp.src(paths.scripts.src)
    .pipe(jsChannel())
    .pipe(gulp.dest(paths.scripts.dest));
});
