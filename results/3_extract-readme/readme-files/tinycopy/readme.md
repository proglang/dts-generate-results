# tinycopy [![Build Status](https://travis-ci.org/vvatanabe/tinycopy.svg?branch=master)](https://travis-ci.org/vvatanabe/tinycopy) [![Coverage Status](https://coveralls.io/repos/github/vvatanabe/tinycopy/badge.svg?branch=master)](https://coveralls.io/github/vvatanabe/tinycopy?branch=master) [![npm version](https://badge.fury.io/js/tinycopy.svg)](https://badge.fury.io/js/tinycopy) [![Bower version](https://badge.fury.io/bo/tinycopy.svg)](https://badge.fury.io/bo/tinycopy)

Tiny library for clipboard copy.

## Install

tinycopy detects and supports CommonJS (node, browserify) and AMD (RequireJS). In the absence of those, it adds a object `TinyCopy` to the global namespace.

### Bower

Install [`node`](https://nodejs.org/download/) and [`bower`](http://bower.io/) if you haven't already.

Get `tinycopy`:

```
$ cd /project
$ bower install tinycopy
```

Add this script to your `index.html`:

```
<script type="text/javascript" src="bower_components/tinycopy/dist/tinycopy.js">
</script>
```

To pull in updates and bug fixes:

```
$ bower update tinycopy
```

### Node / npm

```
$ npm install tinycopy
```

### Typings

```
$ typings i dt~tinycopy -SG
```

## Usage

``` javascript
// copy from input element
var tinycopy = new TinyCopy(element, input);
tinycopy.on('success', function(data) {
  // onCopyCompleted
});
tinycopy.on('error', function(err) {
  // onCopyFailed
});

// copy from text1
var tinycopy = new TinyCopy(element, 'hello');
tinycopy.on('success', function(data) {
  // onCopyCompleted
});
tinycopy.on('error', function(err) {
  // onCopyFailed
});

// copy from text2
element.addEventListener('click', function () {
  TinyCopy.exec('hello', function(err, data) {
    if (!err) {
      // onCopyCompleted
    } else {
      // onCopyFailed
    }    
  });
});
```

## License

MIT License

* http://www.opensource.org/licenses/mit-license.php
