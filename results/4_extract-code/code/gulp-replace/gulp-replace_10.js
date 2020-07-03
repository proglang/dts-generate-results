var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    // See https://mdn.io/string.replace#Specifying_a_string_as_a_parameter
    .pipe(replace(/foo(.{3})/g, '$1foo'))
    .pipe(gulp.dest('build/'));
});
