var gh = require('github-url-to-object')

gh('github:monkey/business');
gh('https://github.com/monkey/business');
gh('https://github.com/monkey/business/tree/master');
gh('https://github.com/monkey/business/tree/master/nested/file.js');
gh('https://github.com/monkey/business.git');
gh('http://github.com/monkey/business');
gh('git://github.com/monkey/business.git');

// Manually added:
gh('git+https://githuuub.com/monkey/business.git', {});
gh('git+https://githuuub.com/monkey/business.git', {enterprise: true});
gh({url: 'git://github.com/monkey/business.git'});
gh('this is not a proper url');
gh({url: 'this is not a proper url'});
