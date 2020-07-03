const gulp = require('gulp')
const shell = require('gulp-shell')

gulp.task('example', () => {
  return gulp
    .src('*.js', { read: false })
    .pipe(shell(['echo <%= file.path %>']))
})
