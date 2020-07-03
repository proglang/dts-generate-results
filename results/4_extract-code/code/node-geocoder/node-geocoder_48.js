geocoder.geocode({address: '29 champs elysée', country: 'France', zipcode: '75008'}, function(err, res) {
  console.log(res);
});

// OpenCage advanced usage example
geocoder.geocode({address: '29 champs elysée', countryCode: 'fr', minConfidence: 0.5, limit: 5}, function(err, res) {
  console.log(res);
});

// Reverse example

// Using callback
geocoder.reverse({lat:45.767, lon:4.833}, function(err, res) {
  console.log(res);
});

// Or using Promise
geocoder.reverse({lat:45.767, lon:4.833})
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });

// Batch geocode

geocoder.batchGeocode(['13 rue sainte catherine', 'another adress'], function (err, results) {
  // Return an array of type {error: false, value: []}
  console.log(results) ;
});

// Set specific http request headers:
var HttpsAdapter = require('node-geocoder/lib/httpadapter/httpsadapter.js')
var httpAdapter = new HttpsAdapter(null, {
  headers: {
    'user-agent': 'My application <email@domain.com>',
    'X-Specific-Header': 'Specific value'
  }
});

var geocoder = NodeGeocoder({
  provider: 'google',
  httpAdapter: httpAdapter
});
