var xml = '<?xml version="1.0" encoding="UTF-8"?><items><item><value>Item 1</value></item><item><value>Item 2</value></item><item><value>Item 3</value></item></items>';
var XML = require('simple-xml');
console.log(JSON.stringify( XML.parse(xml) ));

// {"items":{"item":[{"value":"Item 1"},{"value":"Item 2"},{"value":"Item 3"}]}}

var xml = '<?xml version="1.0" encoding="UTF-8"?><items><item>Item 1</item><item>Item 2</item><item>Item 3</item></items>';
console.log(JSON.stringify( XML.parse(xml) ));

// {"items":{"item":["Item 1","Item 2","Item 3"]}}

