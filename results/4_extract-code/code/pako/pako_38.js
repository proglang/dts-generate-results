var pako = require('pako');

var test = { my: 'super', puper: [456, 567], awesome: 'pako' };

var binaryString = pako.deflate(JSON.stringify(test), { to: 'string' });

//
// Here you can do base64 encode, make xhr requests and so on.
//

var restored = JSON.parse(pako.inflate(binaryString, { to: 'string' }));
