var angularFilesort = require('gulp-angular-filesort'),
    inject = require('gulp-inject');

gulp.src('./src/index.html')
  .pipe(inject(
    gulp.src('./src/app/**/*.js') // gulp-angular-filesort depends on file contents, so don't use {read: false} here
      .pipe(angularFilesort())
    ))
  .pipe(gulp.dest('./build'));
