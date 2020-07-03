# bind-[ponyfill](https://ponyfill.com)

Binds a function to a specified context and arguments.

[![Dependency Status](https://david-dm.org/zkochan/bind-ponyfill/status.svg?style=flat)](https://david-dm.org/zkochan/bind-ponyfill)
[![Build Status](https://travis-ci.org/zkochan/bind-ponyfill.svg?branch=master)](https://travis-ci.org/zkochan/bind-ponyfill)
[![npm version](https://badge.fury.io/js/bind-ponyfill.svg)](http://badge.fury.io/js/bind-ponyfill)


## Installation

```
npm install --save bind-ponyfill
```


## Usage

```js
var bind = require('bind-ponyfill');

bind(function() {
  console.log(this);
}, 'Hello world!');
```


## License

MIT
