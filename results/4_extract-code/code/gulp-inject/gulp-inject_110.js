var inject = require('gulp-inject');

gulp.src('./index.html')
  .pipe(inject(
    gulp.src(['./*.js', './docs/*.docx'], {read: false}), {
      transform: function (filepath) {
        if (filepath.slice(-5) === '.docx') {
          return '<li><a href="' + filepath + '">' + filepath + '</a></li>';
        }
        // Use the default transform as fallback:
        return inject.transform.apply(inject.transform, arguments);
      }
    }
  ))
  .pipe(gulp.dest('./'));
