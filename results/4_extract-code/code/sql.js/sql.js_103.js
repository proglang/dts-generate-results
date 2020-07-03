var initSqlJs = require('sql-wasm.js');
initSqlJs().then(function(SQL){
  var db = new SQL.Database();
  //...
});
