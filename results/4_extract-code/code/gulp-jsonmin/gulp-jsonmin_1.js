var jsonmin = require('gulp-jsonmin');

gulp.task('minify', function () {
    gulp.src('./src/**/*.json')
        .pipe(jsonmin())
        .pipe(gulp.dest('./dist'));
});
