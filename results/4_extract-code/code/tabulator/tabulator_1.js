var Tabulator = require('tabulator').Tabulator;
var tabulator = new Tabulator();

var data=sql.query('SELECT * FROM data');

var matrix=tabulator.toMatrix(data);

res.send(tabulator.toHtmlTable(matrix));
