// gulpfile.js

var gulpCopy = require('gulp-copy');
var otherGulpFunction = require('gulp-other-function');
var sourceFiles = ['source1/*', 'source2/*.txt'];
var destination = 'dest/';
var outputPath = 'some-other-dest/';

return gulp
    .src(sourceFiles)
    .pipe(gulpCopy(outputPath, options))
    .pipe(otherGulpFunction())
    .dest(destination);
