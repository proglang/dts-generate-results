var convert = require('convert-source-map');
var combine = require('combine-source-map');

var fooComment = '//# sourceMappingURL=data:application/json;base64,eyJ2Z [..] pzJylcbiJdfQ==';
var barComment = '//# sourceMappingURL=data:application/json;base64,eyJ2Z [..] VjaycpXG4iXX0=';

var fooFile = {
    source: '(function() {\n\n  console.log(require(\'./bar.js\'));\n\n}).call(this);\n' + '\n' + fooComment
  , sourceFile: 'foo.js'
};
var barFile = {
    source: '(function() {\n\n  console.log(alert(\'alerts suck\'));\n\n}).call(this);\n' + '\n' + barComment
  , sourceFile: 'bar.js'
};

var offset = { line: 2 };
var base64 = combine
  .create('bundle.js')
  .addFile(fooFile, offset)
  .addFile(barFile, { line: offset.line + 8 })
  .base64();

var sm = convert.fromBase64(base64).toObject();
console.log(sm);
