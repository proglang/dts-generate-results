var tinder = require('tinderjs');
var client = new tinder.TinderClient();
var _ = require('underscore')

client.authorize(
  <fb user token>,
  <fb user id>,
  function() {

    var defaults = client.getDefaults()
    var recs_size = defaults.globals.recs_size;

    client.getRecommendations(recs_size, function(error, data){
      _.chain(data.results)
        .pluck('_id')
        .each(function(id) {
          client.like(id, function(error, data) {
            if (data.matched) {
              client.sendMessage(id, "hey ;)");
            }
          });
        });
    });
  });
});
