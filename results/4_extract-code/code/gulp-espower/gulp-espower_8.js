var espower = require('gulp-espower');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// compile, instrument then concatinate
gulp.src('./test/*test.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(espower())
    .pipe(concat('all_test.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'));
// will write the source maps inline in the code
