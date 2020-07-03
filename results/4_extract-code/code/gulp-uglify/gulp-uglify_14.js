var uglifyjs = require('uglify-js'); // can be a git checkout
                                     // or another module (such as `uglify-es` for ES6 support)
var composer = require('gulp-uglify/composer');
var pump = require('pump');

var minify = composer(uglifyjs, console);

gulp.task('compress', function (cb) {
  // the same options as described above
  var options = {};

  pump([
      gulp.src('lib/*.js'),
      minify(options),
      gulp.dest('dist')
    ],
    cb
  );
});
