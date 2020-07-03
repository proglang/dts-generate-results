var {Pool} = require('pg');
var copyTo = require('pg-copy-streams').to;

var pool = new Pool();

pool.connect(function(err, client, done) {
  var stream = client.query(copyTo('COPY my_table TO STDOUT'));
  stream.pipe(process.stdout);
  stream.on('end', done);
  stream.on('error', done);
});
