var sql = require('yesql')('/myproject/sql/',  {type: 'pg'})
var named = require('yesql').pg
var pg = require('pg').connect...

// read from file
pg.query(sql.updatePokemon({price: 5}), function(err, result) {...})

// use only named parameters
pg.query(named('UPDATE pokemon SET price = :price;')({price: 5}), function(err, result) {...})
