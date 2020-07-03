// Uses AXEL's node module
var ctx = require('axel');

// Clear the terminal
ctx.clear();

// Sets the pixel BG color to green
ctx.bg(0,255,0);

// Draws a line into the console
ctx.line(1,1,10,10);

ctx.cursor.restore();
