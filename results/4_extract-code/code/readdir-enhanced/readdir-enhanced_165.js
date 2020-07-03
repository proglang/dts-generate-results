var readdir = require('readdir-enhanced');

function myCustomReaddirMethod(dir, callback) {
  callback(null, ['__myFile.txt']);
}

var options = {
  fs: {
    readdir: myCustomReaddirMethod
  }
};

readdir('my/directory', options, function(err, files) {
  console.log(files);
  // => __myFile.txt
});
