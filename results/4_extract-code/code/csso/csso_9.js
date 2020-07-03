var csso = require('csso');
var ast = csso.syntax.parse('.test { color: #ff0000; }');
var compressedAst = csso.compress(ast).ast;
var minifiedCss = csso.syntax.generate(compressedAst);

console.log(minifiedCss);
// .test{color:red}
