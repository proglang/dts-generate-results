var expandTilde = require('expand-tilde');

expandTilde('~')
//=> '/Users/jonschlinkert'

expandTilde('~+')
//=> process.cwd()
