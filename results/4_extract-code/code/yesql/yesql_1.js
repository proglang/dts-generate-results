var sql = require('yesql')('/myproject/sql/')
var db = new sqlite3.Database('/myproject/sql/db.sqlite3')

db.all(sql.getPokemon, 1337, function(err, rows) {...})

db
  .prepare(sql.addPokemon)
  .run({name: 'pikachu', price: 99}, function(err) {...}
