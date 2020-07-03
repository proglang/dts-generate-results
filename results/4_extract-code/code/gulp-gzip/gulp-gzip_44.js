var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');

gulp.task('deployScripts', function() {
	gulp.src('./dev/scripts/*.coffee')
	.pipe(coffee())
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gzip())
	.pipe(gulp.dest('./public/scripts'));
});
