var Client = require('mariasql');

var c = new Client({
  host: '127.0.0.1',
  user: 'foo',
  password: 'bar'
});

c.query('SHOW DATABASES', null, { useArray: true }, function(err, rows) {
  if (err)
    throw err;
  console.dir(rows);
});

c.end();
