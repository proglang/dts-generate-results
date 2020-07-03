var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('default', function () {
    return gulp.src('logo.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./out'));
});
