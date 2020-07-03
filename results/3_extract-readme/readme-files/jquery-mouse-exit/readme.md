# jquery-mouse-exit

<p>
    <a href="https://travis-ci.org/makeup-jquery/jquery-mouse-exit"><img src="https://api.travis-ci.org/makeup-jquery/jquery-mouse-exit.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/makeup-jquery/jquery-mouse-exit?branch=master'><img src='https://coveralls.io/repos/makeup-jquery/jquery-mouse-exit/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/makeup-jquery/jquery-mouse-exit"><img src="https://david-dm.org/makeup-jquery/jquery-mouse-exit.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/makeup-jquery/jquery-mouse-exit#info=devDependencies"><img src="https://david-dm.org/makeup-jquery/jquery-mouse-exit/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery collection plugin that triggers a 'mouseExit' event only when the mouse cursor has completely left the given element.

```js
// init plugin
$(collection).mouseExit(options);

// handle event
$(collection).on('mouseExit', function(e, data) {
    console.log(data.lostFocus, data.gainedFocus);
})
```

## Install

```js
npm install jquery-mouse-exit
```

## Options

* `delay` - milliseconds in delay before triggering mouseExit event

## Development

All tests are located in `test.js`.

Useful NPM scripts:

* `npm start` for local browser-sync development of gh-pages
* `npm test` runs tests & generates reports (see reports section below)
* `npm run tdd` test driven development: watches code and re-tests after any change
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)

Execute `npm run` to view all available CLI scripts.

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/makeup-jquery/jquery-mouse-exit

## Code Coverage

https://coveralls.io/github/makeup-jquery/jquery-mouse-exit?branch=master
