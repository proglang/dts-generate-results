# [redux-storage-engine-localstorage][]

[![build](https://travis-ci.org/react-stack/redux-storage-engine-localstorage.svg?branch=master)](https://travis-ci.org/react-stack/redux-storage-engine-localstorage)
[![dependencies](https://david-dm.org/react-stack/redux-storage-engine-localstorage.svg)](https://david-dm.org/react-stack/redux-storage-engine-localstorage)
[![devDependencies](https://david-dm.org/react-stack/redux-storage-engine-localstorage/dev-status.svg)](https://david-dm.org/react-stack/redux-storage-engine-localstorage#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-engine-localstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localstorage)
[![npm version](https://img.shields.io/npm/v/redux-storage-engine-localstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localstorage)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-engine-localstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localstorage)

`window.localStorage` based engine for [redux-storage][].

## Installation

    npm install --save redux-storage-engine-localstorage

## Usage

Stores everything inside `window.localStorage`.

```js
import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('my-save-key');
```

You can customize the saving and loading process by providing a [`replacer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter) and/or a [`reviver`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter).

```js
import createEngine from 'redux-storage-engine-localstorage';

function replacer (key, value) {
  if (typeof value === 'string') {
    return 'foo';
  }
  return value;
}

function reviver (key, value) {
  if (key === 'foo') {
    return 'bar';
  }
  return value;
});

const engine = createEngine('my-save-key', replacer, reviver);
```

**Warning**: `localStorage` does not expose a async API and every save/load
operation will block the JS thread!

**Warning**: Some browsers like IE<=11 does not support Promises! If you don't
want to polyfill the whole Promise API, [redux-storage-engine-localstoragefakepromise][]
might be a possible solution for you.

# A fork of [redux-storage-engine-localstorage](https://github.com/michaelcontento/redux-storage-engine-localstorage)

The original author of the package [redux-storage-engine-localstorage](https://github.com/michaelcontento/redux-storage-engine-localstorage) has decided to deprecate the project and no longer maintained. The package will now be maintained here.

Thank you [michaelcontento](https://github.com/michaelcontento) for a great library!

## License

    The MIT License (MIT)

    Copyright (c) 2016- Gunjan Soni <gunjan.soni2002@gmail.com> 
    Copyright (c) 2015-2016 Michael Contento <mail@michaelcontento.de> 

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [redux-storage]: https://github.com/react-stack/redux-storage
  [redux-storage-engine-localstorage]: https://github.com/react-stack/redux-storage-engine-localstorage
  [redux-storage-engine-localstoragefakepromise]: https://github.com/react-stack/redux-storage-engine-localstoragefakepromise
