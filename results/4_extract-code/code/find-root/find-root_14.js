const fs = require('fs')

const gitRoot = findRoot('/Users/jsdnxx/Code/find-root/tests', function (dir) {
  return fs.existsSync(path.resolve(dir, '.git'))
})
