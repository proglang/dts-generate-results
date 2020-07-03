var series = require('stream-series'),
    inject = require('gulp-inject');

var vendorStream = gulp.src(['./src/vendors/*.js'], {read: false});

var appStream = gulp.src(['./src/app/*.js'], {read: false});

gulp.src('./src/index.html')
  .pipe(inject(series(vendorStream, appStream))) // This will always inject vendor files before app files
  .pipe(gulp.dest('./dist'));
