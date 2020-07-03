var Vinyl = require('vinyl');

var file = new Vinyl();
var notAFile = {};

Vinyl.isVinyl(file); // true
Vinyl.isVinyl(notAFile); // false
