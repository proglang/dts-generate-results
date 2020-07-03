var gulp = require('gulp');
var sort = require('sort-stream');
var inject = require('gulp-inject');

gulp.src('index.html')
  .pipe(inject(
    gulp.src(['./src/app/**/*.js'])
      .pipe(sort(function (a, b) {
      // Sort condition here...
      }))
  ))
  .pipe(gulp.dest('./dest'));
