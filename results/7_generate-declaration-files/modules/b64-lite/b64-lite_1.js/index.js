var b64 = require('b64-lite');

// Base64 in ASCII to byte string
b64.atob('aGkgdGhlcmU=');
// hi there

// byte string to Base64 in ASCII
b64.btoa('hi there');
// aGkgdGhlcmU=

// convert unicode to b64
b64.toBase64('hello 你好');
// aGVsbG8g5L2g5aW9

// decode b64 to unicode
b64.fromBase64('aGVsbG8g5L2g5aW9');
// hello 你好
