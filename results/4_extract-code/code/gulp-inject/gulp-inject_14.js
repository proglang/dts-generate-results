var inject = require('gulp-inject');

gulp.src('./src/**/*.html')
  .pipe(inject(gulp.src('./src/**/*.js', {read: false}), {relative: true}))
  .pipe(gulp.dest('./src'));
