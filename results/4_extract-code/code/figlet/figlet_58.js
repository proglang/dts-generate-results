const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'myfont.flf'), 'utf8');
figlet.parseFont('myfont', data);
console.log(figlet.textSync('myfont!', 'myfont'));
