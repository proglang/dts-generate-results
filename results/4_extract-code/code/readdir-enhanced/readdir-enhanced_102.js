var readdir = require('readdir-enhanced');

// Find all .txt files
readdir('my/directory', {filter: '*.txt'});

// Find all package.json files
readdir('my/directory', {filter: '**/package.json', deep: true});

// Find everything with at least one number in the name
readdir('my/directory', {filter: /\d+/});
