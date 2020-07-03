var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace(/foo(.{3})/g, function(match, p1, offset, string) {
      // Replace foobaz with barbaz and log a ton of information
      // See https://mdn.io/string.replace#Specifying_a_function_as_a_parameter
      console.log('Found ' + match + ' with param ' + p1 + ' at ' + offset + ' inside of ' + string);
      return 'bar' + p1;
    }))
    .pipe(gulp.dest('build/'));
});
