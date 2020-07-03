// get the application's root directory
var appRootDir = require('app-root-dir').get();

// set the application's root directory
// (this will set a global so that no matter
// how many instances of app-root-dir module are
// installed, they will all return the same
// directory)
require('app-root-dir').set(__dirname);
