const fs = require('fs')
const klaw = require('klaw')
const through2 = require('through2')

const deleteAction = through2.obj(function (item, enc, next) {
  this.push(item)

  if (path.extname(item.path) === '.tmp') {
    item.deleted = true
    fs.unlink(item.path, next)
  } else {
    item.deleted = false
    next()
  }
})

const deletedFiles = []
klaw('/some/dir')
  .pipe(deleteAction)
  .on('data', item => {
    if (!item.deleted) return
    deletedFiles.push(item.path)
  })
  .on('end', () => console.dir(deletedFiles)) // => all deleted files
