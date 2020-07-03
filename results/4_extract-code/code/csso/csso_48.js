var require('source-map');
var csso = require('csso');
var inputFile = 'path/to/my.css';
var input = fs.readFileSync(inputFile, 'utf8');
var inputMap = input.match(/\/\*# sourceMappingURL=(\S+)\s*\*\/\s*$/);
var output = csso.minify(input, {
  filename: inputFile,
  sourceMap: true
});

// apply input source map to output
if (inputMap) {
  output.map.applySourceMap(
    new SourceMapConsumer(inputMap[1]),
    inputFile
  )
}

// result CSS with source map
console.log(
  output.css +
  '/*# sourceMappingURL=data:application/json;base64,' +
  new Buffer(output.map.toString()).toString('base64') +
  ' */'
);
