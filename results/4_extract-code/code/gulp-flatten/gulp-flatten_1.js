var flatten = require('gulp-flatten');

gulp.src('bower_components/**/*.min.js')
  .pipe(flatten())
  .pipe(gulp.dest('build/js'));
