var QRCode = require('qrcode-svg');
var svg = new QRCode('hello').svg();
...
var pdf = require('html-pdf');
pdf.create(svg, { border: 0, type: 'pdf' }).toFile('output.pdf', function(err, res) {
  ...
});
