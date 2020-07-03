var uglifycss = require('uglifycss');

var uglified = uglifycss.processFiles(
    [ 'file1', 'file2' ],
    { maxLineLen: 500, expandVars: true }
);

console.log(uglified);
