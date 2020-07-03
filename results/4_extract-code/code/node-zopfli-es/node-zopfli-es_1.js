const zopfli = require('node-zopfli-es')
fs
  .createReadStream('file.js')
  .pipe(zopfli.createGzip(options))
  .pipe(fs.createWriteStream('file.js.gz'))
