## Introduction

This library has been written to generate a SVG image of QR Code in Node.js, goals:
* pure JavaScript
* no browser requirement
* no external dependencies
* generate SVG output

## Getting Started

Install the package:
```bash
npm install qrcode-svg
```

Inline example:
```javascript
var QRCode = require("qrcode-svg");
var svg = new QRCode("Hello World!").svg();
```

More options:
```javascript
var qrcode = new QRCode({
  content: "http://github.com/",
  padding: 4,
  width: 256,
  height: 256,
  color: "#000000",
  background: "#ffffff",
  ecl: "M"
});
qrcode.save("sample.svg", function(error) {
  if (error) throw error;
  console.log("Done!");
});
```

## Options

**List of options:**
* **content** - QR Code content, required
* **padding** - white space padding, `4` modules by default, `0` for no border
* **width** - QR Code width in pixels
* **height** - QR Code height in pixels
* **color** - color of modules, color name or hex string, e.g. `#000000`
* **background** - color of background, color name or hex string, e.g. `white`
* **ecl** - error correction level: `L`, `M`, `H`, `Q`

### SVG output

```xml
<?xml version="1.0" standalone="yes"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256">
  <rect x="0" y="0" width="256" height="256" style="fill:#ffffff;shape-rendering:crispEdges;"/>
  <rect x="16" y="16" width="8" height="8" style="fill:#000000;shape-rendering:crispEdges;"/>
  <rect x="24" y="16" width="8" height="8" style="fill:#000000;shape-rendering:crispEdges;"/>
  <rect x="32" y="16" width="8" height="8" style="fill:#000000;shape-rendering:crispEdges;"/>
  ...
</svg>
```

## Command Line

```
Usage:
  qrcode-svg [options] <content>

Options:
  --help                 Print this message
  --padding [value]      Offset in number of modules
  --width [px]           Image width in pixels
  --height [px]          Image height in pixels
  --color [color]        Foreground color, hex or name
  --background [color]   Background color, hex or name
  --ecl [value]          Error correction level: L, M, H, Q
  -o [file]              Output file name
  -f                     Force overwrite
  -v                     Print version number

Examples:
  qrcode-svg http://github.com
  qrcode-svg -f -o hello.svg "Hello World"
  qrcode-svg --padding 2 --width 120 --height 120 "Little fox..."
  qrcode-svg --color blue --background #ececec "...jumps over"
```

## Usage Scenarios

### Convert to other formats

Using [html-pdf](https://www.npmjs.com/package/html-pdf) to convert SVG to PDF (or PNG or JPEG)
```javascript
var QRCode = require('qrcode-svg');
var svg = new QRCode('hello').svg();
...
var pdf = require('html-pdf');
pdf.create(svg, { border: 0, type: 'pdf' }).toFile('output.pdf', function(err, res) {
  ...
});
```

### ASCII modules

QR Code in ASCII to output in a shell
```javascript
var QRCode = require('qrcode-svg');

var hello = new QRCode("Hello World!");
var modules = hello.qrcode.modules;

var ascii = '';
var length = modules.length;
for (var y = 0; y < length; y++) {
  for (var x = 0; x < length; x++) {
    var module = modules[x][y];
    ascii += (module ? 'x' : ' ');
  }
  ascii += '\r\n';
}
console.log(ascii);
```

```


    xxxxxxx xx    x x xxxxxxx
    x     x  xxxx x x x     x
    x xxx x xx  xx  x x xxx x
    x xxx x       xx  x xxx x
    x xxx x  x   x  x x xxx x
    x     x  x  xx xx x     x
    xxxxxxx x x x x x xxxxxxx
            xx     xx        
    x x  xx    x x   xx   x x
       x x  xx x    xx x xx x
     x  x xx   x x x  xx   xx
     x xx  xxx xx x x  x  x x
     xx  xxxx       xxxx    x
    x x  x xx x xx xx x xx xx
    x    xx   xxxx    xxxx   
    xx xx   x  x  x x xx    x
       xxxx xxxx    xxxxxx  x
                    x   x x  
    xxxxxxx  x  xxx x x x   x
    x     x xxx  x xx   x  x 
    x xxx x        xxxxxxxxxx
    x xxx x  xxxxxxxxx  x xx 
    x xxx x xxx  xx  x    x x
    x     x    x    x     x  
    xxxxxxx xxx xxx   x   x x


```

### Web browser

Use on a HTML page with JavaScript
```html
<!DOCTYPE html>
<html>
<body>
<div id="container"></div>
<script src="dist/qrcode.min.js"></script>
<script>
var qrcode = new QRCode("Hello World!");
var svg = qrcode.svg();
document.getElementById("container").innerHTML = svg;
</script>
</body>
</html>
```

## Thanks

Thanks to [davidshimjs](https://github.com/davidshimjs/qrcodejs) for the base library.

Thanks to [Kazuhiko Arase](http://www.d-project.com/) for the original QR Code in JavaScript algorithm.

## Legal notice

```
Licensed under the MIT license:
http://www.opensource.org/licenses/mit-license.php

The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
http://www.denso-wave.com/qrcode/faqpatent-e.html
```