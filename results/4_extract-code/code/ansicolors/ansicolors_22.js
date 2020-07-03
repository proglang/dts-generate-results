var colors = require('ansicolors');

function inspect(obj, depth) {
  return require('util').inspect(obj, false, depth || 5, true);
}

console.log('open blue', inspect(colors.open.blue));
console.log('close bgBlack', inspect(colors.close.bgBlack));

// => open blue '\u001b[34m'
//    close bgBlack '\u001b[49m'
