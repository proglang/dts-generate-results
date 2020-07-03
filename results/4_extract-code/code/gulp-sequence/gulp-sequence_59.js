var gulp = require('gulp')
var gulpSequence = require('gulp-sequence')

gulp.task('test', gulpSequence(['a', 'b'], 'c', ['d', 'e'], 'f'))
