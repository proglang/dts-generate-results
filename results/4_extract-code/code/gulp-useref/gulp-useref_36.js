var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    useref = require('gulp-useref'),
    lazypipe = require('lazypipe');

gulp.task('default', function () {
    return gulp.src('index.html')
        .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'));
});
