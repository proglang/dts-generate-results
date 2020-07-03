var readdir = require('readdir-enhanced');

// Only return file names containing an underscore
function myFilter(stats) {
  return stats.isFile() && stats.path.indexOf('_') >= 0;
}

readdir('my/directory', {filter: myFilter}, function(err, files) {
  console.log(files);
  // => __myFile.txt
  // => my_other_file.txt
  // => img_1.jpg
  // => node_modules
});
