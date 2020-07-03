var rest = require('./restling');

var successCallback = function(result){
console.log('Data: ' + result.data);
console.log('Response: ' + result.response);
};

var errorCallback = function(error){
  console.log('Error: ' + error.message);
  if (error.response) {
    console.log('Response: ' + error.response);
  }
};

rest.get('http://google.com').then(successCallback, errorCallback);

// auto convert json to object
rest.get('http://twaud.io/api/v1/users/danwrong.json')
  .then(successCallback, errorCallback);

// auto convert xml to object
rest.get('http://twaud.io/api/v1/users/danwrong.xml')
  .then(successCallback, errorCallback);

rest.get('http://someslowdomain.com',{timeout: 10000})
  .then(successCallback, errorCallback);

rest.post('http://user:pass@service.com/action', {
  data: { id: 334 },
}).then(function(result) {
  if (result.response.statusCode == 201) {
    result.data;// you can get at the raw response like this...
  }
},
errorCallback);

// multipart request sending a 321567 byte long file using https
rest.post('https://twaud.io/api/v1/upload.json', {
  multipart: true,
  username: 'danwrong',
  password: 'wouldntyouliketoknow',
  data: {
    'sound[message]': 'hello from restling!',
    'sound[file]': rest.file('doug-e-fresh_the-show.mp3', null, 321567, null, 'audio/mpeg')
  }
}).then(successCallback, errorCallback);

// post JSON
var jsonData = { id: 334 };
rest.postJson('http://example.com/action', jsonData).then(successCallback, errorCallback);

// put JSON
var jsonData = { id: 334 };
rest.putJson('http://example.com/action', jsonData).then(successCallback, errorCallback);
