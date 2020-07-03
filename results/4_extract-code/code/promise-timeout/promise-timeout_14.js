'use strict';

var pt = require('promise-timeout');

var somePromise = goDoSomething();

pt.timeout(somePromise, 1000)
  .then(function (thing) {
    console.log('I did a thing!');
  }).catch(function (err) {
    if (err instanceof pt.TimeoutError) {
      console.error('Timeout :-(');
    }
  });
