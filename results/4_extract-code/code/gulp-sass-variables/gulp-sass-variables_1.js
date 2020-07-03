var gulp = require('gulp'),
    argv = require('yargs').argv,
    sassVariables = require('gulp-sass-variables'),
    sass = require('gulp-sass');

// Compile css
gulp.task('css', function () {
  return gulp.src('./src/scss/master.scss')
             .pipe(sassVariables({
               $env: argv.production ? 'production' : 'development'
             }))
             .pipe(sass())
             .pipe(gulp.dest('./dist/css'))
});

