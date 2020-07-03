var gulp = require('gulp'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    concat = require('gulp-concat'),
    cache = require('gulp-cached'),
    remember = require('gulp-remember');

var scriptsGlob = 'src/**/*.js';

gulp.task('scripts', function () {
  return gulp.src(scriptsGlob)
      .pipe(cache('scripts')) // only pass through changed files
      .pipe(header('(function () {')) // do special things to the changed files...
      .pipe(footer('})();')) // for example, add a stupid-simple module wrap to each file
      .pipe(remember('scripts')) // add back all files to the stream
      .pipe(concat('app.js')) // do things that require all files
      .pipe(gulp.dest('public/'))
});

gulp.task('watch', function () {
  var watcher = gulp.watch(scriptsGlob, ['scripts']); // watch the same files in our scripts task
  watcher.on('change', function (event) {
    if (event.type === 'deleted') { // if a file is deleted, forget about it
      delete cache.caches['scripts'][event.path];
      remember.forget('scripts', event.path);
    }
  });
});
