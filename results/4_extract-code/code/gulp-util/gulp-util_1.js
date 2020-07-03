var gutil = require('gulp-util');

gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));

gutil.replaceExtension('file.coffee', '.js'); // file.js

var opt = {
  name: 'todd',
  file: someGulpFile
};
gutil.template('test <%= name %> <%= file.path %>', opt) // test todd /js/hi.js
