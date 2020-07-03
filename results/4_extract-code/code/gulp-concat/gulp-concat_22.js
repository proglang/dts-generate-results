var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['./lib/file3.js', './lib/file1.js', './lib/file2.js'])
    .pipe(concat({ path: 'new.js', stat: { mode: 0666 }}))
    .pipe(gulp.dest('./dist'));
});
