# git-add-remote [![NPM version](https://img.shields.io/npm/v/git-add-remote.svg?style=flat)](https://www.npmjs.com/package/git-add-remote) [![NPM monthly downloads](https://img.shields.io/npm/dm/git-add-remote.svg?style=flat)](https://npmjs.org/package/git-add-remote)  [![NPM total downloads](https://img.shields.io/npm/dt/git-add-remote.svg?style=flat)](https://npmjs.org/package/git-add-remote) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/git-add-remote.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/git-add-remote)

> API for adding git remotes.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save git-add-remote
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add git-add-remote
```

## Usage

The main export is a function that must be called with the current working directory to initialize git from. Leave it undefined to use `process.cwd()`.

```js
var cwd = 'foo/bar';
var addRemote = require('git-add-remote')(cwd);

// async
addRemote(name, url, callback);

// sync (requires node.js v0.11.12 or higher)
addRemote.sync(name, url);
```

## async

**Examples**

```js
var addRemote = require('git-add-remote')();

addRemote('foo', 'https://foo.git', function(err) {
  if (err) return console.log(err);
});
```

## sync

**Examples**

```js
var addRemote = require('git-add-remote')();

addRemote.sync('foo', 'https://foo.git');
addRemote.sync('bar', 'https://bar.git');
addRemote.sync('baz', 'https://baz.git');
```

## About

### Related projects

* [gfc](https://www.npmjs.com/package/gfc): Simple way to initialize a new git repository in an empty directory, add a file… [more](https://github.com/jonschlinkert/gfc) | [homepage](https://github.com/jonschlinkert/gfc "Simple way to initialize a new git repository in an empty directory, add a file and do a first commit (or skip that part in a directory with files). Useful for unit tests and generators.")
* [git-branch](https://www.npmjs.com/package/git-branch): Get the current branch for a local git repository. | [homepage](https://github.com/jonschlinkert/git-branch "Get the current branch for a local git repository.")
* [git-user-email](https://www.npmjs.com/package/git-user-email): Get the email address of the current user from git config. | [homepage](https://github.com/jonschlinkert/git-user-email "Get the email address of the current user from git config.")
* [git-user-name](https://www.npmjs.com/package/git-user-name): Get a user's name from git config at the project or global scope, depending on… [more](https://github.com/jonschlinkert/git-user-name) | [homepage](https://github.com/jonschlinkert/git-user-name "Get a user's name from git config at the project or global scope, depending on what git uses in the current context.")
* [git-username](https://www.npmjs.com/package/git-username): Get the username from a git remote origin URL. | [homepage](https://github.com/jonschlinkert/git-username "Get the username from a git remote origin URL.")
* [list-git-remotes](https://www.npmjs.com/package/list-git-remotes): List the remotes for a local git repository. Sync and async. | [homepage](https://github.com/jonschlinkert/list-git-remotes "List the remotes for a local git repository. Sync and async.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.5.0, on April 19, 2017._