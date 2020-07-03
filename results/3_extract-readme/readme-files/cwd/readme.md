# cwd [![NPM version](https://img.shields.io/npm/v/cwd.svg?style=flat)](https://www.npmjs.com/package/cwd) [![NPM downloads](https://img.shields.io/npm/dm/cwd.svg?style=flat)](https://npmjs.org/package/cwd) [![Build Status](https://img.shields.io/travis/jonschlinkert/cwd.svg?style=flat)](https://travis-ci.org/jonschlinkert/cwd)

Easily get the CWD (current working directory) of a project based on package.json, optionally starting from a given path. (node.js/javascript util)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install cwd --save
```

## Usage

```js
var cwd = require('cwd');
cwd();
cwd('one/two.js');
cwd('one', 'two.js');
cwd(['one', 'two.js']);
```

## Related projects

You might also be interested in these projects:

* [global-modules](https://www.npmjs.com/package/global-modules): The directory used by npm for globally installed npm modules. | [homepage](https://github.com/jonschlinkert/global-modules "The directory used by npm for globally installed npm modules.")
* [global-paths](https://www.npmjs.com/package/global-paths): Returns an array of unique "global" directories based on the user's platform and environment. The… [more](https://github.com/jonschlinkert/global-paths) | [homepage](https://github.com/jonschlinkert/global-paths "Returns an array of unique "global" directories based on the user's platform and environment. The resulting paths can be used for doing lookups for generators or other globally installed npm packages. Node.js / JavaScript.")
* [global-prefix](https://www.npmjs.com/package/global-prefix): Get the npm global path prefix. | [homepage](https://github.com/jonschlinkert/global-prefix "Get the npm global path prefix.")
* [is-absolute](https://www.npmjs.com/package/is-absolute): Polyfill for node.js `path.isAbolute`. Returns true if a file path is absolute. | [homepage](https://github.com/jonschlinkert/is-absolute "Polyfill for node.js `path.isAbolute`. Returns true if a file path is absolute.")
* [is-relative](https://www.npmjs.com/package/is-relative): Returns `true` if the path appears to be relative. | [homepage](https://github.com/jonschlinkert/is-relative "Returns `true` if the path appears to be relative.")
* [relative](https://www.npmjs.com/package/relative): Get the relative filepath from path A to path B. Calculates from file-to-directory, file-to-file, directory-to-file… [more](https://github.com/jonschlinkert/relative) | [homepage](https://github.com/jonschlinkert/relative "Get the relative filepath from path A to path B. Calculates from file-to-directory, file-to-file, directory-to-file, and directory-to-directory.")

## Contributing

This document was generated by [verb](https://github.com/verbose/verb), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/cwd/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/cwd/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 05, 2016._