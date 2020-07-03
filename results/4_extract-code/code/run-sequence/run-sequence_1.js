var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var fs = require('fs');

// This will run in this order:
// * build-clean
// * build-scripts and build-styles in parallel
// * build-html
// * Finally call the callback function
gulp.task('build', function(callback) {
  runSequence('build-clean',
              ['build-scripts', 'build-styles'],
              'build-html',
              callback);
});

// configure build-clean, build-scripts, build-styles, build-html as you wish,
// but make sure they either return a stream or promise, or handle the callback
// Example:

gulp.task('build-clean', function() {
    // Return the Promise from del()
    return del([BUILD_DIRECTORY]);
//  ^^^^^^
//   This is the key here, to make sure asynchronous tasks are done!
});

gulp.task('build-scripts', function() {
    // Return the stream from gulp
    return gulp.src(SCRIPTS_SRC).pipe(...)...
//  ^^^^^^
//   This is the key here, to make sure tasks run to completion!
});

gulp.task('callback-example', function(callback) {
    // Use the callback in the async function
    fs.readFile('...', function(err, file) {
        console.log(file);
        callback();
//      ^^^^^^^^^^
//       This is what lets gulp know this task is complete!
    });
});
