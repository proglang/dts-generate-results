var fs = require('fs');
var join = require('path').join;
var readdir = require('readdir-stream');
var dir = join(__dirname, 'hello');

readdir(dir).on('readable', function() {
  var entry = this.read();
  if (!entry) return;
  entry.should.have.property('path').a('string');
  entry.should.have.property('stat').an.instanceof(fs.Stats);
});
