var read = require('fs-readdir-recursive')
read(__dirname) === [
  'test/test.js',
  'index.js',
  'LICENSE',
  'package.json',
  'README.md'
]
