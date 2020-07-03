const dnssd = require('dnssd');

// advertise a http server on port 4321
const ad = new dnssd.Advertisement(dnssd.tcp('http'), 4321);
ad.start();

// find all chromecasts
const browser = dnssd.Browser(dnssd.tcp('googlecast'))
  .on('serviceUp', service => console.log("Device up: ", service))
  .on('serviceDown', service => console.log("Device down: ", service))
  .start();
