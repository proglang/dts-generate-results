var decrypt = require('ssh-key-decrypt');

// you have to actually know this already of course.
var passphrase = 'hoohah';

var fs = require('fs');
var path = require('path');

var keyfile = path.resolve(process.env.HOME, '.ssh', 'id_rsa');
var fileData = fs.readFileSync(keyfile, 'ascii');

var key = decrypt(fileData, passphrase);

// now key is the decoded data as a buffer
// You can also optionally pass in an output encoding

var b64Key = decrypt(fileData, passphrase, 'base64');
