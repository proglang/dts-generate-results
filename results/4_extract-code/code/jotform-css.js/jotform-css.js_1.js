var cssString = ' .someSelector { margin:40px 10px; padding:5px}';
//require parser constructor
var cssjs = require("./css.js");
//initialize parser object
var parser = new cssjs.cssjs();
//parse css string
var parsed = parser.parseCSS(cssString);

console.log(parsed);
