var Yelp = require('yelp');
var util = require('util');

module.exports = function create(fittingDef, bagpipes) {

  var yelp = Yelp.createClient(fittingDef.config);

  return function yelp_search(context, cb) {

    var input = context.input;

    var options = {
      term: input.term,
      ll: util.format('%s,%s', input.latitude, input.longitude)
    };

    yelp.search(options, function(error, data) {

      if (error) { return cb(error); }
      if (data.error) { return cb(data.error); }

      cb(null, data.businesses);
    });
  }
};
