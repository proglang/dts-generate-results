var stdMocks = require('std-mocks');

stdMocks.use();
process.stdout.write('ok');
console.log('log test\n');
stdMocks.restore();

var output = stdMocks.flush();
console.log(output.stdout); // ['ok', 'log test\n']
