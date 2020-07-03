const usage = require('gulp-help-doc');
const gutil = require('gulp-util');

gulp.task('help', function() {
    return usage(gulp, {
        lineWidth: 120,
        keysColumnWidth: 30,
        logger: gutil
    });
});
