var request = require('requestretry');

request({
  url: 'https://api.domain.com/v1/a/b',
  json: true,

  // The below parameters are specific to request-retry
  maxAttempts: 5,   // (default) try 5 times
  retryDelay: 5000,  // (default) wait for 5s before trying again
  retryStrategy: request.RetryStrategies.HTTPOrNetworkError // (default) retry on 5xx or network errors
}, function(err, response, body){
  // this callback will only be called when the request succeeded or after maxAttempts or on error
  if (response) {
    console.log('The number of request attempts: ' + response.attempts);
  }
});
