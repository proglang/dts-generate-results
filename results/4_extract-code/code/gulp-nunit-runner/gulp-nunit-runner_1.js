var gulp = require('gulp'),
    nunit = require('gulp-nunit-runner');

gulp.task('unit-test', function () {
    return gulp.src(['**/*.Test.dll'], {read: false})
        .pipe(nunit({
            executable: 'C:/nunit/bin/nunit-console.exe',
        }));
});

