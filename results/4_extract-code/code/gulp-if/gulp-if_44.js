var uglify = require('gulp-uglify');

gulp.task('task', function() {
  gulp.src(['./*.js', '!./node_modules/**'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});
