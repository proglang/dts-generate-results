var Two = require('../build/two.js'); // Or from npm, `require('two.js');`
var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs');
var path = require('path');

var width = 800;
var height = 600;

var canvas = new Canvas();
Two[Two.Types.canvas].Utils.shim(canvas);

var time = Date.now();

var two = new Two({
  type: Two.Types.canvas,
  width: 800,
  height: 600,
  domElement: canvas
});

var rect = two.makeRectangle(width / 2, height / 2, 50, 50);
rect.fill = 'rgb(255, 100, 100)';
rect.noStroke();

two.update();

fs.writeFileSync(path.resolve(__dirname, './images/rectangle.png'), canvas.toBuffer());
console.log('Finished rendering. Time took: ', Date.now() - time);

process.exit();
