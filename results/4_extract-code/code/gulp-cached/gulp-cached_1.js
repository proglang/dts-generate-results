var cache = require('gulp-cached');

gulp.task('lint', function(){
  return gulp.src('files/*.js')
    .pipe(cache('linting'))
    .pipe(jshint())
    .pipe(jshint.reporter())
});

gulp.task('watch', function(){
  gulp.watch('files/*.js', ['lint']);
});

gulp.task('default', ['watch','lint']);
