var connect = require('camo').connect;

var database;
var uri = 'nedb:///Users/scott/data/animals';
connect(uri).then(function(db) {
    database = db;
});
