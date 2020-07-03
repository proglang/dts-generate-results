var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');

gulp.task('tarball', function() {
	gulp.src('./files/*')
	.pipe(tar('archive.tar'))
	.pipe(gzip())
	.pipe(gulp.dest('.'));
});
