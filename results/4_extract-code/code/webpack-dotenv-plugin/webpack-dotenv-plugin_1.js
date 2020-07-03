// webpack.config.js
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  ...
  plugins: [
    new DotenvPlugin({
      sample: './.env.default',
      path: './.env'
    })
  ]
  ...
};
