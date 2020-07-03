var Client = require('mariasql');

var c = new Client({
  host: '127.0.0.1',
  user: 'foo',
  password: 'bar',
  db: 'mydb'
});

var query = c.query("SELECT * FROM users WHERE id > 1");
query.on('result', function(res) {
  // `res` is a streams2+ Readable object stream
  res.on('data', function(row) {
    console.dir(row);
  }).on('end', function() {
    console.log('Result set finished');
  });
}).on('end', function() {
  console.log('No more result sets!');
});

c.end();
