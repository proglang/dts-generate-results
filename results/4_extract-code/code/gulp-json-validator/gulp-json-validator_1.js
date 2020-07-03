var gulpJsonValidator = require('gulp-json-validator');
gulp.task('default', function() {
  return gulp.src('./**/*.json')
    .pipe(gulpJsonValidator({ allowDuplicatedKeys: false }))
});
