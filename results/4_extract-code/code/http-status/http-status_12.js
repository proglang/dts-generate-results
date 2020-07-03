// Accessing property from the NGINX category
const status = require('http-status');
console.info(status.extra.nginx.NO_RESPONSE)
// Accessing default HTTP status merged with NGINX status
const status = require('http-status/lib/nginx');
console.info(status.IM_A_TEAPOT);
console.info(status.NO_RESPONSE)
