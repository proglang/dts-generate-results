var fs = require('fs');
var mm = require('musicmetadata');

// create a new parser from a node ReadStream
var parser = mm(fs.createReadStream('sample.mp3'), function (err, metadata) {
  if (err) throw err;
  console.log(metadata);
});
