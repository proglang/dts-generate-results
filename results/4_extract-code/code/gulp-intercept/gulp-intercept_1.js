var intercept = require('./gulp-intercept');
var concat = require('gulp-concat');

gulp.task('task', function () {
  gulp.src(['./*.txt'])
    .pipe(intercept(function(file){
      console.log('FILE: ' + file.path );
      console.log('OLD CONTENT: ' + file.contents.toString() );
      file.contents = new Buffer( "Hello!!!" );
      console.log('NEW CONTENT: ' + file.contents.toString() );
      return file;
    })) 
    .pipe(concat('onefile.txt'))
    .pipe(gulp.dest('./'));
});
