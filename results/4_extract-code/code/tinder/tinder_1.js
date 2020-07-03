var tinder = require('tinder');
var client = new tinder.TinderClient();

client.authorize(
  <fb user token>,
  <fb user id>,
  function() {
    client.getRecommendations(10, function(error, data){
      console.log(data.results);
  });
});
