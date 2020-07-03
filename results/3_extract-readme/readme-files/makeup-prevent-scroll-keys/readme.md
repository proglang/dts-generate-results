# makeup-prevent-scroll-keys

<p>
    <a href="https://travis-ci.org/makeup-js/makeup-prevent-scroll-keys"><img src="https://api.travis-ci.org/makeup-js/makeup-prevent-scroll-keys.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/makeup-js/makeup-prevent-scroll-keys?branch=master'><img src='https://coveralls.io/repos/makeup-js/makeup-prevent-scroll-keys/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/makeup-js/makeup-prevent-scroll-keys"><img src="https://david-dm.org/makeup-js/makeup-prevent-scroll-keys.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/makeup-js/makeup-prevent-scroll-keys#info=devDependencies"><img src="https://david-dm.org/makeup-js/makeup-prevent-scroll-keys/dev-status.svg" alt="devDependency status" /></a>
</p>

A vanilla JavaScript port of <a href="https://github.com/ianmcburnie/jquery-prevent-scroll-keys">jquery-prevent-scroll-keys</a>.

This module prevents the default scroll event when pressing down arrow, page down, spacebar, etc. This behaviour is required for ARIA widgets such as menu, tabs and comboboxes. See [eBay MIND Patterns](https://ebay.gitbooks.io/mindpatterns/content/) for further information.

## Experimental

This module is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
// via npm
npm install makeup-prevent-scroll-keys

// via yarn
yarn add makeup-prevent-scroll-keys
```

## Example

```js
// require the module
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');

// get element reference
const widgetEl = document.querySelector('.widget');

// execute
scrollKeyPreventer.add(el);

// to remove
scrollKeyPreventer.remove(el);

```

## Parameters

None

## Custom Events        

None

## Dependencies

None

## Development

* `npm start`
* `npm test`
* `npm run lint`
* `npm run fix`
* `npm run build`
* `npm run clean`

The following hooks exist, and do not need to be invoked manually:

* `npm prepublishOnly` cleans, lints, tests and builds on every `npm publish` command
* `pre-commit` cleans, lints, tests and builds on every `git commit` command

## Test Reports

Each test run will generate the following reports:

* `/reports/coverage` contains Istanbul code coverage report
* `/reports/html` contains HTML test report

## CI Build

https://travis-ci.org/makeup-js/makeup-prevent-scroll-keys

## Code Coverage

https://coveralls.io/github/makeup-js/makeup-prevent-scroll-keys
