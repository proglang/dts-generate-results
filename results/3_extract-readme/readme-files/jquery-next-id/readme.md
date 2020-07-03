# jquery-next-id

<p>
    <a href="https://travis-ci.org/makeup-jquery/jquery-next-id"><img src="https://api.travis-ci.org/makeup-jquery/jquery-next-id.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/makeup-jquery/jquery-next-id?branch=master'><img src='https://coveralls.io/repos/makeup-jquery/jquery-next-id/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/makeup-jquery/jquery-next-id"><img src="https://david-dm.org/makeup-jquery/jquery-next-id.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/makeup-jquery/jquery-next-id#info=devDependencies"><img src="https://david-dm.org/makeup-jquery/jquery-next-id/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery collection plugin that will assign the next ID in sequence if an ID property does not already exist.

```js
$(collection).nextId([prefix]);
```

## Install

```js
npm install jquery-next-id
```
## Defaults

```js
$.fn.nextId.defaults = {
    prefix : 'nid',
    separator : '-'
};
```

## Example

Input:

```html
<div /><div />
```

Execute:

```js
$('div').nextId('my-prefix');
```

Output:

```html
<div id="my-prefix-0" /><div id="my-prefix-1" />
```

## Development

Run `npm start` for test driven development. All tests are located in `test.js`.

Execute `npm run` to view all available CLI scripts:

* `npm start` test driven development: watches code and re-tests after any change
* `npm test` runs tests & generates reports (see reports section below)
* `npm run lint` lints code and reports to jshint.txt
* `npm run minify` builds minified version of code
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)
* `npm run clean` deletes all generated test reports and coverage files

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/makeup-jquery/jquery-next-id

## Code Coverage

https://coveralls.io/github/makeup-jquery/jquery-next-id?branch=master
