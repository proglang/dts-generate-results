var rest = require('restling');

rest.get('http://google.com').then(function(result){
  console.log(result.data);
}, function(error){
  console.log(error.message);
});
