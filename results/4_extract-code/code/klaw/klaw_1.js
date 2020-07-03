const klaw = require('klaw')

const items = [] // files, directories, symlinks, etc
klaw('/some/dir')
  .on('data', item => items.push(item.path))
  .on('end', () => console.dir(items)) // => [ ... array of files]
