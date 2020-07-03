var execSync = require('child_process').execSync;
console.log(execSync('chcp').toString());
console.log(execSync('chcp 65001').toString());
