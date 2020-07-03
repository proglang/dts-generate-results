var base64 = require('base-64');
var utf8 = require('utf8');

var text = 'foo © bar 𝌆 baz';
var bytes = utf8.encode(text);
var encoded = base64.encode(bytes);
console.log(encoded);
// → 'Zm9vIMKpIGJhciDwnYyGIGJheg=='
