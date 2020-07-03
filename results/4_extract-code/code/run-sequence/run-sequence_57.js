var runSequence = require('run-sequence');
runSequence.options.ignoreUndefinedTasks = true;
gulp.task('task', function(cb) {
	runSequence('foo', null, 'bar'); // no longer errors on `null`
})
