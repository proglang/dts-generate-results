// webpack.config.js
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    // ...
    new GenerateJsonPlugin('my-file.json', {
      foo: 'bar'
    })
  ]
  // ...
};
