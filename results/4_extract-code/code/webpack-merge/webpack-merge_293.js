var path = require('path');
var baseConfig = {
    server: {
      target: 'node',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.node.js'
      }
    },
    client: {
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.js'
      }
    }
  };

// specialized configuration
var production = {
    client: {
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
      }
    }
  }

module.exports = merge.multiple(baseConfig, production)
