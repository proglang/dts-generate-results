var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    var contextOptions = { modules: true };
    return gulp.src('./src/*.css')
        .pipe(postcss(contextOptions))
        .pipe(gulp.dest('./dest'));
});
