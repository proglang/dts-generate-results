var mongodbUri = require('mongodb-uri');
var uri = 'mongodb://user%3An%40me:p%40ssword@host:1234/d%40tabase?authSource=%40dmin';
var uriObject = mongodbUri.parse(uri);
console.log(JSON.stringify(uriObject, null, 2));
