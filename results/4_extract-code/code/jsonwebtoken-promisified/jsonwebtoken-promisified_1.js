var Promise = require("bluebird");
var jwt = require("jsonwebtoken-promisified");

Promise.try(function() {
	return jwt.signAsync({foo: "bar"}, "secretKey");
}).then(function(token) {
	console.log("Signed token:", token);
})
