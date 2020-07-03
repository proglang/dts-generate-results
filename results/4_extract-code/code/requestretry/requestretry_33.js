// See the tests for different libraries usage examples

/**
 * @param  {Function} resolver The promise resolver function
 * @return {Object} The promise instance
 */
function customPromiseFactory(resolver) {
  // With when.js
  return require('when').promise(resolver);

  // With RSVP.js
  var Promise = require('rsvp').Promise;

  return new Promise(resolver);
}

request({
  url: 'https://api.domain.com/v1/a/b',
  json: true,

  // Custom promise factory function
  promiseFactory: customPromiseFactory
})
.then(function (response) {
  // response = The full response object or just the body
})
.catch(function(error) {
  // error = Any occurred error
})
