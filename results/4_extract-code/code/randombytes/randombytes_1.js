var randomBytes = require('randombytes');
randomBytes(16);//get 16 random bytes
randomBytes(16, function (err, resp) {
  // resp is 16 random bytes
});
