const zopfli = require('@gfx/zopfli');

module.exports = {
  plugins: [
    new CompressionPlugin({
      compressionOptions: {
         numiterations: 15
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      }
    })
  ]
}
