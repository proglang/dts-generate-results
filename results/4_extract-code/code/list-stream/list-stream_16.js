var ListStream = require('list-stream')
  , fs = require('fs')

fs.createReadStream('/path/to/file.dat').pipe(ListStream(function (err, data) {
  if (err)
    throw err

  console.log('Contents of /path/to/file.dat:')
  // `data` is an array of Buffer objects
  console.log(Buffer.concat(data).toString('utf8'))
}))
