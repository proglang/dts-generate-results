const klaw = require('klaw')

klaw('/some/dir')
  .on('readable', function () {
    let item
    while ((item = this.read())) {
      // do something with the file
    }
  })
  .on('error', (err, item) => {
    console.log(err.message)
    console.log(item.path) // the file the error occurred on
  })
  .on('end', () => console.dir(items)) // => [ ... array of files]
