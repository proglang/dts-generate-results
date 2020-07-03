var sql = require('yesql')('/myproject/sql/', {type: 'mysql'})
var named = require('yesql').mysql
var mysql = require('mysql').createConnection...

// read from file
mysql.query(sql.updatePokemon({price: 5}), function(err, result) {...})

// use only named parameters
mysql.query(named('UPDATE ::ptable SET price = :price;')({price: 5, ptable: 'pokemon'}), function(err, result) {...})
