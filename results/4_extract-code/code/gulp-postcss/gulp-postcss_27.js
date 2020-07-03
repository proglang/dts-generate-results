var gulp = require('gulp');
var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var sugarss = require('sugarss');

gulp.task('default', function () {
    var plugins = [nested];
    return gulp.src('in.sss')
        .pipe(postcss(plugins, { parser: sugarss }))
        .pipe(gulp.dest('out'));
});
