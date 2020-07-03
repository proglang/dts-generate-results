var fs = require('fs');
var initSqlJs = require('sql-wasm.js');
var filebuffer = fs.readFileSync('test.sqlite');
 
initSqlJs().then(function(SQL){
  // Load the db
  var db = new SQL.Database(filebuffer);
});

