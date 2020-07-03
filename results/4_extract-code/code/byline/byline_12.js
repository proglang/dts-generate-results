var fs = require('fs'),	
    byline = require('byline');

var stream = fs.createReadStream('sample.txt');
stream = byline.createStream(stream);

stream.on('data', function(line) {
  console.log(line);
});
