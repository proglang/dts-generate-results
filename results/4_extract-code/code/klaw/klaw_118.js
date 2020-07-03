const klaw = require('klaw')
const through2 = require('through2')

const excludeDirFilter = through2.obj(function (item, enc, next) {
  if (!item.stats.isDirectory()) this.push(item)
  next()
})

const items = [] // files, directories, symlinks, etc
klaw('/some/dir')
  .on('error', err => excludeDirFilter.emit('error', err)) // forward the error on
  .pipe(excludeDirFilter)
  .on('data', item => items.push(item.path))
  .on('end', () => console.dir(items)) // => [ ... array of files without directories]
