var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('TASKNAME', function() {
    return gulp.src(mainBowerFiles(/* options */), { base: 'path/to/bower_components' })
        .pipe(/* what you want to do with the files */)
});
