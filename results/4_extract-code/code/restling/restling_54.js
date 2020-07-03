var rest  = require('restling');
var array = [{'url':'http://google.com'},
             {'url':'http://some/rest/api'}]

rest.settleAsync(array).then(function(result){
  // handle results here
  // result is [responseFromGoogle, responseFromApi]
},function(err){
  // handle error here
});
