var MCrypt = require('mcrypt').MCrypt;

var desEcb = new MCrypt('des', 'ecb');
desEcb.open('madepass'); // we are set the key
