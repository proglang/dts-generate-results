const JWT   = require('jsonwebtoken');
const obj   = { id:123,"name":"Charlie" }; // object/info you want to sign
const token = JWT.sign(obj, secret);
const url   = "/path?token="+token;
