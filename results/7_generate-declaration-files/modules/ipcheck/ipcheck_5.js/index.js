var IPCheck = require('ipcheck');
var ip = new IPCheck('192.168.0.1');
var cidr = new IPCheck('192.168.0.1/32');

ip.match(cidr); //= true
