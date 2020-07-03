var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    function callback(file) {
        return {
            plugins: [
                require('postcss-import')({ root: file.dirname }),
                require('postcss-modules')
            ],
            options: {
                parser: file.extname === '.sss' ? require('sugarss') : false
            }
        }
    }
    return gulp.src('./src/*.css')
        .pipe(postcss(callback))
        .pipe(gulp.dest('./dest'));
});
