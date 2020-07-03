var sourcemaps = require('gulp-sourcemaps');

gulp.src('src/main.js')
    .pipe(sourcemaps.init())
    .pipe(gulp_jspm())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
