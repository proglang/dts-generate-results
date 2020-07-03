var isparta = require('isparta');
var istanbul = require('gulp-istanbul');

gulp.src('lib/**.js')
  .pipe(istanbul({
    // supports es6
    instrumenter: isparta.Instrumenter
  }));
