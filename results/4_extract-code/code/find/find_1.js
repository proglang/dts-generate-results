var find = require('find');

find.file(__dirname, function(files) {
  console.log(files.length);
})
