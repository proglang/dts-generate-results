var inject = require('gulp-inject');

gulp.src('./src/index.html')
  .pipe(inject(gulp.src('./src/importantFile.js', {read: false}), {starttag: '<!-- inject:head:{{ext}} -->'}))
  .pipe(inject(gulp.src(['./src/*.js', '!./src/importantFile.js'], {read: false})))
  .pipe(gulp.dest('./dist'));
