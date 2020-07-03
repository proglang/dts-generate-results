var gulp = require('gulp');
var coffeeify = require('gulp-coffeeify');
var xform = function(data){
  return 'module.exports = "' + data + '"';
}
gulp.task('scripts', function() {
  gulp.src('src/coffee/**/*.coffee')
    .pipe(coffeeify({
      transforms: [
        {
          ext: '.extension',
          transform: xform
        }
      ]
    }))
    .pipe(gulp.dest('./build/js'));
});
