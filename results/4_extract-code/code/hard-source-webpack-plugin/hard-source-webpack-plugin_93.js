configHash: function(webpackConfig) {
  return require('node-object-hash')({sort: false}).hash(webpackConfig);
}
