const path = require('path')
const klawSync = require('klaw-sync')

const filterFn = item => {
  const basename = path.basename(item.path)
  return basename === '.' || basename[0] !== '.'
}

const paths = klawSync('/some/dir', { filter: filterFn})
