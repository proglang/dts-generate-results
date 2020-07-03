var espower = require('gulp-espower');

gulp.src('./test/*.js')
    .pipe(espower())
    .pipe(gulp.dest('./dist'));
