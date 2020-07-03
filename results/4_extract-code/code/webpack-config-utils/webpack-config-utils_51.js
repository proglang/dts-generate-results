const webpack = require('webpack')
const {resolve} = require('path')
const {getIfUtils} = require('webpack-config-utils')

module.exports = env => {
  const {ifDev} = getIfUtils(env)
  return {
    output: {
      // etc.
      pathinfo: ifDev(),
      path: resolve(__dirname, 'dist'),
    },
    // etc.
  }
}
