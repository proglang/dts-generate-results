var gulp = require('gulp');
var file = require('gulp-file');
var inject = require('gulp-inject');

file('index.html', '<html><head></head></html>')
  .pipe(inject(gulp.src(['./src/app/**/*.js']), {
    starttag: '<head>',
    endtag: '</head>'
  }))
  .pipe(gulp.dest('./dest'));
