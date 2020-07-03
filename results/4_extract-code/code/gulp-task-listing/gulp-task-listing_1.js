var gulp = require('gulp');
var taskListing = require('gulp-task-listing');

// Add a task to render the output
gulp.task('help', taskListing);

// Add some top-level and sub tasks
gulp.task('build', ['build-js', 'build-css']);
gulp.task('build-js', function() { ... })
gulp.task('build-css', function() { ... })

gulp.task('compile', ['compile-js', 'compile-css']);
gulp.task('compile-js', function() { ... })
gulp.task('compile-css', function() { ... })
