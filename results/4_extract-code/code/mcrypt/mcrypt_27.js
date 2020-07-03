var MCrypt = require('mcrypt').MCrypt;

var desEcb = new MCrypt('des', 'ecb');
desEcb.open('madepass'); // we are set the key

var ciphertext = desEcb.encrypt('this is top secret message!');
console.log(ciphertext.toString('base64'));
