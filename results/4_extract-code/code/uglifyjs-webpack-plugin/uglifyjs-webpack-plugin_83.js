({
  'uglify-js': require('uglify-js/package.json').version, // uglify version
  'uglifyjs-webpack-plugin': require('../package.json').version, // plugin version
  'uglifyjs-webpack-plugin-options': this.options, // plugin options
  path: compiler.outputPath ? `${compiler.outputPath}/${file}` : file, // asset path
  hash: crypto
    .createHash('md4')
    .update(input)
    .digest('hex'), // source file hash
});
