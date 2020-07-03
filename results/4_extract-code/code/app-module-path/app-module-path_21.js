var packageDir = path.dirname(require.resolve('installed-module-allowed'));
require('../').enableForDir(packageDir);
