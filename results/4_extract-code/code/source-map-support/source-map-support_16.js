require('source-map-support').install({
  retrieveSourceMap: function(source) {
    if (source === 'compiled.js') {
      return {
        url: 'original.js',
        map: fs.readFileSync('compiled.js.map', 'utf8')
      };
    }
    return null;
  }
});
