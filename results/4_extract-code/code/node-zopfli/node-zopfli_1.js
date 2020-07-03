var zopfli = require('node-zopfli');
fs.createReadStream('file.js')
  .pipe(zopfli.createGzip(options))
  .pipe(fs.createWriteStream('file.js.gz'));
