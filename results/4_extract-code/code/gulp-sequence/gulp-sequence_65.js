var gulp = require('gulp')
var gulpSequence = require('gulp-sequence').use(gulp)

gulp.task('test', gulpSequence(['a', 'b'], 'c', ['d', 'e'], 'f'))
