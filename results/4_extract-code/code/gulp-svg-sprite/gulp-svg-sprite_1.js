var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite');

gulp.src('path/to/assets/*.svg')
  .pipe(svgSprite(/* ... Insert your configuration here ... */))
  .pipe(gulp.dest('out'));
