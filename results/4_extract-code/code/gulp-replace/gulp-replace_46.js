var replace = require('gulp-replace');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('filename', function() {
      // Replaces instances of "filename" with "file.txt"
      // this.file is also available for regex replace
      // See https://github.com/gulpjs/vinyl#instance-properties for details on available properties
      return this.file.relative;
    }))
    .pipe(gulp.dest('build/'));
});
