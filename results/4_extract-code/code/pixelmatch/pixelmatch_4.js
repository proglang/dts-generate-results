var fs = require('fs'),
    PNG = require('pngjs').PNG,
    pixelmatch = require('pixelmatch');

var img1 = fs.createReadStream('img1.png').pipe(new PNG()).on('parsed', doneReading),
    img2 = fs.createReadStream('img2.png').pipe(new PNG()).on('parsed', doneReading),
    filesRead = 0;

function doneReading() {
    if (++filesRead < 2) return;
    var diff = new PNG({width: img1.width, height: img1.height});

    pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1});

    diff.pack().pipe(fs.createWriteStream('diff.png'));
}
