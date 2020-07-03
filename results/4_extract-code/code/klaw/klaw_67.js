const klaw = require('klaw')
const path = require('path')
const through2 = require('through2')

let totalPngsInBytes = 0
const aggregatePngSize = through2.obj(function (item, enc, next) {
  if (path.extname(item.path) === '.png') {
    totalPngsInBytes += item.stats.size
  }
  this.push(item)
  next()
})

klaw('/some/dir')
  .pipe(aggregatePngSize)
  .on('data', item => items.push(item.path))
  .on('end', () => console.dir(totalPngsInBytes)) // => total of all pngs (bytes)
