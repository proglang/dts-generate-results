var asyncBusboy = require('async-busboy');

function(someHTTPRequest) {
  asyncBusboy(someHTTPRequest).then(function(formData) {
    // do something with formData.files
    // do someting with formData.fields
  });
}
