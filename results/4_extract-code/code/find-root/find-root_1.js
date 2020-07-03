const path = require('path')
const findRoot = require('find-root')

// from a starting directory, recursively search for the nearest
// directory containing package.json
const root = findRoot('/Users/jsdnxx/Code/find-root/tests')
// => '/Users/jsdnxx/Code/find-root'

const dirname = path.basename(root)
console.log('is it the same?')
console.log(dirname === require(path.join(root, 'package.json')).name)
