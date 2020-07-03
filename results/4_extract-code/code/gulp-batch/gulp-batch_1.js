var gulp = require('gulp');
var batch = require('gulp-batch');

gulp.watch(['lib/**', 'test/**'], batch(function(events, cb) {
    events.on('data', console.log).on('end', cb);
}));
