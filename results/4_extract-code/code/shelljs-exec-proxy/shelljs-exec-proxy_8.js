const shell = require('shelljs-exec-proxy');
shell.git.status();
shell.git.add('.');
shell.git.commit('-am', 'Fixed issue #1');
shell.git.push('origin', 'master');
