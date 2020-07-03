var rand = require('random-seed').create();
rand.initState();
var n1 = rand(100); // n1 === 58
var n2 = rand(100); // n2 === 26
rand.initState();   // re-init
var n3 = rand(100); // n3 === 58 && n3 === n1
