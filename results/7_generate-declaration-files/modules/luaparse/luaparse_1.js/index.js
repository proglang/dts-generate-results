var parser = require('luaparse');
var ast = parser.parse('i = 0');
console.log(JSON.stringify(ast));
