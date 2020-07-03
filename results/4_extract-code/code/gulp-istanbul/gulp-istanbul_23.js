var istanbul = require('gulp-istanbul');


gulp.task('pre-test', function () {
  return gulp.src(['lib/**/*.js'])
    // Covering files
    .pipe(istanbul())
    // Write the covered files to a temporary directory
    .pipe(gulp.dest('test-tmp/'));
});

gulp.task('test', ['pre-test'], function () {
  // Make sure your tests files are requiring files from the
  // test-tmp/ directory
  return gulp.src(['test/*.js'])
    .pipe(testFramework())
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports());
});
