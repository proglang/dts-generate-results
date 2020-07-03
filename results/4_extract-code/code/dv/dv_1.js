var dv = require('dv');
var fs = require('fs');
var image = new dv.Image('png', fs.readFileSync('textpage300.png'));
var tesseract = new dv.Tesseract('eng', image);
console.log(tesseract.findText('plain'));
