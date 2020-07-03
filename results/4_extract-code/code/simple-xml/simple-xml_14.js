var obj = {"items":{"item":[{"value":"Item 1"},{"value":"Item 2"},{"value":"Item 3"}]}}
var XML = require('simple-xml');
console.log( XML.stringify(obj) );

// <items><item><value>Item 1</value></item><item><value>Item 2</value></item><item><value>Item 3</value></item></items>

