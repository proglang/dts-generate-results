var gulp = require('gulp'),
    useref = require('gulp-useref');

gulp.task('default', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});
