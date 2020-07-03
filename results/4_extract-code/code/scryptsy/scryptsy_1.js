var scrypt = require('scryptsy')

var key = "pleaseletmein"
var salt = "SodiumChloride"
var data = scrypt(key, salt, 16384, 8, 1, 64)
console.log(data.toString('hex'))
// => 7023bdcb3afd7348461c06cd81fd38ebfda8fbba904f8e3ea9b543f6545da1f2d5432955613f0fcf62d49705242a9af9e61e85dc0d651e40dfcf017b45575887
