//gulpfile.js
var gulp = require('gulp');
var webpack = require('webpack');
var webpackEnv = require('webpack-env');

gulp.task('webpack', function() {
  return gulp.src('./entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      plugins: [webpackEnv]
    }))
    .pipe(gulp.dest('build/'));
});
