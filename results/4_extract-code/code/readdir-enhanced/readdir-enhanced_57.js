var readdir = require('readdir-enhanced');

readdir('my/directory', {deep: 2}, function(err, files) {
  console.log(files);
  // => subdir1
  // => subdir1/file.txt
  // => subdir1/subdir2
  // => subdir1/subdir2/file.txt
  // => subdir1/subdir2/subdir3
});