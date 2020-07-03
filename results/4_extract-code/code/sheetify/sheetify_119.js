const browserify = require('browserify')

const b = browserify(path.join(__dirname, 'transform/source.js'))
b.transform('sheetify', { transform: [ 'sheetify-cssnext' ] })
b.bundle().pipe(process.stdout)
