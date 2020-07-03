var MCrypt = require('mcrypt').MCrypt;

var blowfishCfb = new MCrypt('blowfish', 'cfb');
console.log(blowfishCfb.getKeySize());
