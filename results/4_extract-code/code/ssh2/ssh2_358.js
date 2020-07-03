var fs = require('fs');
var crypto = require('crypto');
var inspect = require('util').inspect;

var ssh2 = require('ssh2');
var utils = ssh2.utils;

var allowedUser = Buffer.from('foo');
var allowedPassword = Buffer.from('bar');
var allowedPubKey = utils.parseKey(fs.readFileSync('foo.pub'));

new ssh2.Server({
  hostKeys: [fs.readFileSync('host.key')]
}, function(client) {
  console.log('Client connected!');

  client.on('authentication', function(ctx) {
    var user = Buffer.from(ctx.username);
    if (user.length !== allowedUser.length
        || !crypto.timingSafeEqual(user, allowedUser)) {
      return ctx.reject();
    }

    switch (ctx.method) {
      case 'password':
        var password = Buffer.from(ctx.password);
        if (password.length !== allowedPassword.length
            || !crypto.timingSafeEqual(password, allowedPassword)) {
          return ctx.reject();
        }
        break;
      case 'publickey':
        var allowedPubSSHKey = allowedPubKey.getPublicSSH();
        if (ctx.key.algo !== allowedPubKey.type
            || ctx.key.data.length !== allowedPubSSHKey.length
            || !crypto.timingSafeEqual(ctx.key.data, allowedPubSSHKey)
            || (ctx.signature && !allowedPubKey.verify(ctx.blob, ctx.signature))) {
          return ctx.reject();
        }
        break;
      default:
        return ctx.reject();
    }

    ctx.accept();
  }).on('ready', function() {
    console.log('Client authenticated!');

    client.on('session', function(accept, reject) {
      var session = accept();
      session.once('exec', function(accept, reject, info) {
        console.log('Client wants to execute: ' + inspect(info.command));
        var stream = accept();
        stream.stderr.write('Oh no, the dreaded errors!\n');
        stream.write('Just kidding about the errors!\n');
        stream.exit(0);
        stream.end();
      });
    });
  }).on('end', function() {
    console.log('Client disconnected');
  });
}).listen(0, '127.0.0.1', function() {
  console.log('Listening on port ' + this.address().port);
});
