var MCrypt = require('mcrypt').MCrypt;

var desEcb = new MCrypt('des', 'ecb');
desEcb.open('madepass'); // we are set the key

var plaintext = desEcb.decrypt(new Buffer('fkJnIgtiH8nsGDryyuIsmyf5vABMGStlpACfKCTifvA=', 'base64'));
console.log(plaintext.toString());
