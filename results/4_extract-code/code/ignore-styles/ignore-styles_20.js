const _ = require('lodash')
const path = require('path')

register(undefined, (module, filename) => {
  if (_.some(['.png', '.jpg'], ext => filename.endsWith(ext))) {
    module.exports = path.basename(filename)
  }
})
