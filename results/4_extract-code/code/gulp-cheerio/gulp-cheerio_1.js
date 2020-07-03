var gulp = require('gulp'),
    cheerio = require('gulp-cheerio');

gulp.task('sync', function () {
  return gulp
    .src(['src/*.html'])
    .pipe(cheerio(function ($, file) {
      // Each file will be run through cheerio and each corresponding `$` will be passed here.
      // `file` is the gulp file object
      // Make all h1 tags uppercase
      $('h1').each(function () {
        var h1 = $(this);
        h1.text(h1.text().toUpperCase());
      });
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('async', function () {
  return gulp
    .src(['src/*.html'])
    .pipe(cheerio(function ($, file, done) {
      // The only difference here is the inclusion of a `done` parameter.
      // Call `done` when everything is finished. `done` accepts an error if applicable.
      done();
    }))
    .pipe(gulp.dest('dist/'));
});
