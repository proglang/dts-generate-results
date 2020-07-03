var sshpk = require('sshpk');

var fs = require('fs');

/* Read in an OpenSSH-format public key */
var keyPub = fs.readFileSync('id_rsa.pub');
var key = sshpk.parseKey(keyPub, 'ssh');

/* Get metadata about the key */
console.log('type => %s', key.type);
console.log('size => %d bits', key.size);
console.log('comment => %s', key.comment);

/* Compute key fingerprints, in new OpenSSH (>6.7) format, and old MD5 */
console.log('fingerprint => %s', key.fingerprint().toString());
console.log('old-style fingerprint => %s', key.fingerprint('md5').toString());
