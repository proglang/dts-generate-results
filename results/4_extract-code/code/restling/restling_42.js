var rest = require('restling');
var obj  = {'google':{'url':'http://google.com'},
            'api':{'url':'http://some/rest/api'}}

rest.settleAsync(obj).then(function(result){
  // handle result here
  // result is {google: responseFromGoogle, api: responseFromApi}
},function(err){
  // handle error here
});
