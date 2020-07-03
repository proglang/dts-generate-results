const klaw = require('klaw')
const path = require('path')

const filterFunc = item => {
  const basename = path.basename(item)
  return basename === '.' || basename[0] !== '.'
}

klaw('/some/dir', { filter: filterFunc })
  .on('data', item => {
    // only items of none hidden folders will reach here
  })
