var fs = require('fs');
var {Pool} = require('pg');
var copyFrom = require('pg-copy-streams').from;

var pool = new Pool();

pool.connect(function(err, client, done) {
  var stream = client.query(copyFrom('COPY my_table FROM STDIN'));
  var fileStream = fs.createReadStream('some_file.tsv')
  fileStream.on('error', done);
  stream.on('error', done);
  stream.on('end', done);
  fileStream.pipe(stream);
});
