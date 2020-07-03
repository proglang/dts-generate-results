var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  
  // Basic configuration example
  config = {
    mode: {
      css: { // Activate the «css» mode
        render: {
          css: true // Activate CSS output (with default options)
        }
      }
    }
  };

gulp.src('**/*.svg', { cwd: 'path/to/assets' })
  .pipe(svgSprite(config))
  .pipe(gulp.dest('out'));
