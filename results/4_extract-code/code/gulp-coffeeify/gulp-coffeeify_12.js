var gulp = require('gulp');
var coffeeify = require('gulp-coffeeify');
gulp.task('scripts', function() {
  gulp.src('src/coffee/**/*.coffee')
    .pipe(coffeeify({
      options: {
        debug: true, // source map
        paths: [__dirname + '/node_modules', __dirname + '/src/coffee']
      }
    }))
    .pipe(gulp.dest('./build/js'));
});
