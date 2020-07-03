({
  terser: require('terser/package.json').version, // terser version
  'terser-webpack-plugin': require('../package.json').version, // plugin version
  'terser-webpack-plugin-options': this.options, // plugin options
  path: compiler.outputPath ? `${compiler.outputPath}/${file}` : file, // asset path
  hash: crypto
    .createHash('md4')
    .update(input)
    .digest('hex'), // source file hash
});
