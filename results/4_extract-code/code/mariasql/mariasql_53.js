var Client = require('mariasql');

var c = new Client({
  host: '127.0.0.1',
  user: 'foo',
  password: 'bar',
  db: 'mydb'
});

c.query('SELECT * FROM users WHERE id = :id AND name = :name',
        { id: 1337, name: 'Frylock' },
        function(err, rows) {
  if (err)
    throw err;
  console.dir(rows);
});

c.query('SELECT * FROM users WHERE id = ? AND name = ?',
        [ 1337, 'Frylock' ],
        function(err, rows) {
  if (err)
    throw err;
  console.dir(rows);
});

c.end();
