var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('foo', function(match) {
      // Replaces instances of "foo" with "oof"
      return match.reverse();
    }))
    .pipe(gulp.dest('build/'));
});
