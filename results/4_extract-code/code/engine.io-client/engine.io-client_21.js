var opts = {
  extraHeaders: {
    'X-Custom-Header-For-My-Project': 'my-secret-access-token',
    'Cookie': 'user_session=NI2JlCKF90aE0sJZD9ZzujtdsUqNYSBYxzlTsvdSUe35ZzdtVRGqYFr0kdGxbfc5gUOkR9RGp20GVKza; path=/; expires=Tue, 07-Apr-2015 18:18:08 GMT; secure; HttpOnly'
  }
};

var socket = require('engine.io-client')('ws://localhost', opts);
socket.on('open', function(){
  socket.on('message', function(data){});
  socket.on('close', function(){});
});
