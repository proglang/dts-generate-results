const {parse, tldExists} = require('tldjs');

// Checking only if TLD exists in URL or hostname
// First TLD exists; the second does not.
console.log(tldExists('https://www.bbc'));
console.log(tldExists('tld.unknown'));

// Retrieving hostname related informations of a given URL
parse('http://www.writethedocs.org/conf/eu/2017/');
