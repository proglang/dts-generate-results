var gulp = require('gulp')
var gulpSequence = require('gulp-sequence')

gulp.task('a', function (cb) {
  //... cb()
})

gulp.task('b', function (cb) {
  //... cb()
})

gulp.task('c', function (cb) {
  //... cb()
})

gulp.task('d', function (cb) {
  //... cb()
})

gulp.task('e', function (cb) {
  //... cb()
})

gulp.task('f', function () {
  // return stream
  return gulp.src('*.js')
})

// usage 1, recommend
// 1. run 'a', 'b' in parallel;
// 2. run 'c' after 'a' and 'b';
// 3. run 'd', 'e' in parallel after 'c';
// 3. run 'f' after 'd' and 'e'.
gulp.task('sequence-1', gulpSequence(['a', 'b'], 'c', ['d', 'e'], 'f'))

// usage 2
gulp.task('sequence-2', function (cb) {
  gulpSequence(['a', 'b'], 'c', ['d', 'e'], 'f', cb)
})

// usage 3
gulp.task('sequence-3', function (cb) {
  gulpSequence(['a', 'b'], 'c', ['d', 'e'], 'f')(cb)
})

gulp.task('gulp-sequence', gulpSequence('sequence-1', 'sequence-2', 'sequence-3'))
