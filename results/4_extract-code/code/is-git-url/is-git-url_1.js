var isGitUrl = require('is-git-url');

isGitUrl('git://github.com/jonschlinkert/is-git-url.git');
//=> true

isGitUrl('https://github.com/jonschlinkert/');
//=> false
