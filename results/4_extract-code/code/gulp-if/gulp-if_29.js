var gulpIgnore = require('gulp-ignore');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var condition = './gulpfile.js';

gulp.task('task', function() {
  gulp.src('./*.js')
    .pipe(jshint())
    .pipe(gulpIgnore.exclude(condition))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});
