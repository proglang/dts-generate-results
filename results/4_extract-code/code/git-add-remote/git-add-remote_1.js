var cwd = 'foo/bar';
var addRemote = require('git-add-remote')(cwd);

// async
addRemote(name, url, callback);

// sync (requires node.js v0.11.12 or higher)
addRemote.sync(name, url);
