# purl
A minuscule library to parse URLs

[![npm Version](https://img.shields.io/npm/v/purl.svg)](https://www.npmjs.com/package/purl)
[![Build Status](https://travis-ci.org/intuitivcloud/purl.svg)](https://travis-ci.org/intuitivcloud/purl)
[![Dependency Status](https://david-dm.org/intuitivcloud/purl.svg)](https://david-dm.org/intuitivcloud/purl)
[![License](https://img.shields.io/badge/license-New%20BSD-blue.svg)](https://github.com/intuitivcloud/purl)

## Installation

### Node

```bash
$ npm install purl
```

### Browser

Copy the file `purl.min.js` in the `dist` folder and refer to it in your HTML:

```html
<script src="/js/purl.min.js"></script>
```

`purl` will now be available via `window.purl`.

## Usage

### Full URL Example

```js
var url = purl('http://user:pass@www.example.com:8000/foo/bar?st=1&lt=10;#/koo9');

url.origin;      // => 'http://www.example.com:8000'
url.protocol;    // => 'http:'
url.username;    // => 'user'
url.password;    // => 'pass'
url.host;        // => 'www.example.com:8000'
url.hostname;    // => 'www.example.com'
url.port;        // => '8000'
url.pathname;    // => '/foo/bar'
url.search;      // => 'st=1&lt=10;'
url.hash;        // => '/koo9'
```

### Path Example

```js
var p = purl('/foo/bar?st=1&lt=10;/koo9');

p.pathname;    // => '/foo/bar'
p.search;      // => 'st=1&lt=10;'
p.hash;        // => '/koo9'
```

## License

Copyright (c) 2015, intuitivcloud Systems &lt;engineering@intuitivcloud.com&gt;    
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of signalman nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
