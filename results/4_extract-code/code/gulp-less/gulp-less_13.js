var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

return gulp.src('./less/**/*.less')
  .pipe(less({
    plugins: [autoprefix]
  }))
  .pipe(gulp.dest('./public/css'));
