var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  plumber = require('gulp-plumber'),
  
  // Basic configuration example
  config = {
    mode: {
      css: {
        render: {
          css: true
        }
      }
    }
  };

gulp.src('**/*.svg', { cwd: '' })
  .pipe(plumber())
  .pipe(svgSprite(config))
  .on('error', function(error) {
    /* Do some awesome error handling ... */
  })
  .pipe(gulp.dest('out'));
