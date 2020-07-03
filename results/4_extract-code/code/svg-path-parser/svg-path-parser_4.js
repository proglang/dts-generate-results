const {parseSVG, makeAbsolute} = require('svg-path-parser');
const commands = parseSVG(d);
makeAbsolute(commands); // Note: mutates the commands in place!
console.log(commands);
