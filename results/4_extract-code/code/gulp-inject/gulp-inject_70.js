var bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    stylus = require('gulp-stylus'),
    es = require('event-stream');

var cssFiles = gulp.src('./src/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./build'));

gulp.src('./src/index.html')
  .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
  .pipe(inject(es.merge(
    cssFiles,
    gulp.src('./src/app/**/*.js', {read: false})
  )))
  .pipe(gulp.dest('./build'));
