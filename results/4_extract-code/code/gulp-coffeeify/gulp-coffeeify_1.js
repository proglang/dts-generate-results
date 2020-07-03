var gulp = require('gulp');
var coffeeify = require('gulp-coffeeify');

// Basic usage
gulp.task('scripts', function() {
	gulp.src('src/coffee/**/*.coffee')
		.pipe(coffeeify())
		.pipe(gulp.dest('./build/js'));
});
