var fs = require('fs'),
    PNG = require('pngjs').PNG;

fs.createReadStream('in.png')
    .pipe(new PNG({
        colorType: 2,
        bgColor: {
            red: 0,
            green: 255,
            blue: 0
        }
    }))
    .on('parsed', function() {
        this.pack().pipe(fs.createWriteStream('out.png'));
    });
