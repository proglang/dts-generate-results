var Client = require('mariasql');

var c = new Client({
  host: '127.0.0.1',
  user: 'foo',
  password: 'bar',
  db: 'mydb'
});

var prep = c.prepare('SELECT * FROM users WHERE id = :id AND name = :name');

c.query(prep({ id: 1337, name: 'Frylock' }), function(err, rows) {
  if (err)
    throw err;
  console.dir(rows);
});

c.end();
