var fs = require('fs');
var font = BDF.parse(fs.readFileSync('c64.bfd'));
var bitmap = BDF.draw(font, 'hello');
console.log(bitmap);
