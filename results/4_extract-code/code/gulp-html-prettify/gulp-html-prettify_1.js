var prettify = require('gulp-html-prettify');

gulp.task('templates', function() {
  gulp.src('./lib/*.html')
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./dist/'))
});
