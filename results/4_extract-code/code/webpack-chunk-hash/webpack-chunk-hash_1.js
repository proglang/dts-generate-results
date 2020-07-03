
// webpack.config.js

var WebpackChunkHash = require('webpack-chunk-hash');

module.exports = {
  // ...
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new WebpackChunkHash({algorithm: 'md5'}) // 'md5' is default value
  ]
};

