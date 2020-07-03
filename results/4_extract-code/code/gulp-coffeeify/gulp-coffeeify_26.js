var gulp = require('gulp');
var cofeeify = require('gulp-coffeeify');
gulp.task('scripts', function() {
  gulp.src('src/coffee/**/*.coffee')
    .pipe(coffeeify({
      aliases: [
        {
          cwd: 'src/coffee/app',
          base: 'app'
        }
      ]
    }))
    .pipe(gulp.dest('./build/js'));
});
