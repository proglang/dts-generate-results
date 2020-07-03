// load Node Canvas dependency
var Canvas = require('canvas');

// load obelisk.js module
// here we need the Canvas as a module parameter
var obelisk = require('obelisk.js')(Canvas);

// create a Node Canvas instance
var canvas = new Canvas(600,450);

// Use obelisk the same way you will use it in the browser ...

// Save canvas to a file
canvas.createPNGStream().pipe(fs.createWriteStream('./figure.png'));
