var pbkdf2 = require('pbkdf2')
var derivedKey = pbkdf2.pbkdf2Sync('password', 'salt', 1, 32, 'sha512')

...