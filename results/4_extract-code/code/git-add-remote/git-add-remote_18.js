var addRemote = require('git-add-remote')();

addRemote.sync('foo', 'https://foo.git');
addRemote.sync('bar', 'https://bar.git');
addRemote.sync('baz', 'https://baz.git');
