var es = require('event-stream'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// Concatenate vendor scripts
var vendorStream = gulp.src(['./src/vendors/*.js'])
  .pipe(concat('vendors.js'))
  .pipe(gulp.dest('./dist'));

// Concatenate AND minify app sources
var appStream = gulp.src(['./src/app/*.js'])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));

gulp.src('./src/index.html')
  .pipe(inject(es.merge(vendorStream, appStream)))
  .pipe(gulp.dest('./dist'));
