// Example usage within a gulpfile
var lazypipe = require('lazypipe');

...

// initialize a lazypipe
var jsHintTasks = lazypipe()
    // adding a pipeline step, notice the stream function has not been called!
    .pipe(jshint)
    // adding a step with an argument
    .pipe(jshint.reporter, 'jshint-stylish');
 
// this is OK, because lazypipes are immutable
// jsHintTasks will _not_ be affected by the addition.
var jsTasks = jsHintTasks
    .pipe(gulp.dest, 'build/js');
 
// Create another pipe
var cssTasks = lazypipe()
    .pipe(recess, recessConfig)
    .pipe(less)
    .pipe(autoprefixer);


// now using the lazypipes
gulp.task('jsHint', function() {
    gulp.src('js/**/*.js').pipe(jsHintTasks());
});

gulp.task('build', function() {
    // for example only!
    return gulp.src('js/**/*.js').pipe(jsTasks());
});

gulp.task('default', ['build'], function() {
	// using gulp-watch
	watch('js/**/*.js').pipe(jsTasks());
});
