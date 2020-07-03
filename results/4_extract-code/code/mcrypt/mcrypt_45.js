var MCrypt = require('mcrypt').MCrypt;

var blowfishCfb = new MCrypt('blowfish', 'cfb');
var iv = blowfishCfb.generateIv();

blowfishCfb.open('somekey', iv);

var ciphertext = blowfishCfb.encrypt('sometext');

console.log(Buffer.concat([iv, ciphertext]).toString('base64'));
