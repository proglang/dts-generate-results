var glob = require('bash-glob');
console.log(glob.sync('*.js', {cwd: 'foo'}));
console.log(glob.sync(['*.js'], {cwd: 'bar'}));
