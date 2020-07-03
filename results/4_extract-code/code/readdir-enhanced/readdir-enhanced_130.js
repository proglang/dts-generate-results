var readdir = require('readdir-enhanced');
var path = require('path');

// Get absolute paths
var absPath = path.resolve('my/dir');
readdir('my/directory', {basePath: absPath}, function(err, files) {
  console.log(files);
  // => /absolute/path/to/my/directory/file1.txt
  // => /absolute/path/to/my/directory/file2.txt
  // => /absolute/path/to/my/directory/subdir
});

// Get paths relative to the working directory
readdir('my/directory', {basePath: 'my/directory'}, function(err, files) {
  console.log(files);
  // => my/directory/file1.txt
  // => my/directory/file2.txt
  // => my/directory/subdir
});
