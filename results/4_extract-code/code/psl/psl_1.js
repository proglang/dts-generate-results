var psl = require('psl');

// Parse domain without subdomain
var parsed = psl.parse('google.com');
console.log(parsed.tld); // 'com'
console.log(parsed.sld); // 'google'
console.log(parsed.domain); // 'google.com'
console.log(parsed.subdomain); // null

// Parse domain with subdomain
var parsed = psl.parse('www.google.com');
console.log(parsed.tld); // 'com'
console.log(parsed.sld); // 'google'
console.log(parsed.domain); // 'google.com'
console.log(parsed.subdomain); // 'www'

// Parse domain with nested subdomains
var parsed = psl.parse('a.b.c.d.foo.com');
console.log(parsed.tld); // 'com'
console.log(parsed.sld); // 'foo'
console.log(parsed.domain); // 'foo.com'
console.log(parsed.subdomain); // 'a.b.c.d'
