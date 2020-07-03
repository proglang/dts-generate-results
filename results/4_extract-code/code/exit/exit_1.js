var exit = require('exit');

// These lines should appear in the output, EVEN ON WINDOWS.
console.log("omg");
console.error("yay");

// process.exit(5);
exit(5);

// These lines shouldn't appear in the output.
console.log("wtf");
console.error("bro");
