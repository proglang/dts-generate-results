var keyMirror = require('keymirror');
var COLORS = keyMirror({blue: null, red: null});
var myColor = COLORS.blue;
var isColorValid = !!COLORS[myColor];
