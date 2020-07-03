var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', function() {
    gulp.src('./dev/scripts/*.js')
	.pipe(gzip())
	.pipe(gulp.dest('./public/scripts'));
});
