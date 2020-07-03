// Import module
var petfinder = require('petfinder')('api_key','api_secret');

// Get list of breeds
petfinder.getBreedList('cat', function(err, breeds) {
  console.log(breeds)
});
