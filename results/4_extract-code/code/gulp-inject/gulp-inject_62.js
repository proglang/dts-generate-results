var inject = require('gulp-inject');

gulp.src('./src/index.html')
  .pipe(inject(gulp.src('./src/importantFile.js', {read: false}), {name: 'head'}))
  .pipe(inject(gulp.src(['./src/*.js', '!./src/importantFile.js'], {read: false})))
  .pipe(gulp.dest('./dist'));