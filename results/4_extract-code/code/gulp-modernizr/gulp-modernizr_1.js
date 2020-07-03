var modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src('./js/*.js')
    .pipe(modernizr())
    .pipe(gulp.dest('build/'))
});
