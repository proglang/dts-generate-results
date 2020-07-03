var setCookie = require('set-cookie-parser');

var response = fetch(/*...*/);

// This is mainly for React Native; Node.js does not combine set-cookie headers.
var combinedCookieHeader = response.headers.get('Set-Cookie');
var splitCookieHeaders = setCookie.splitCookiesString(combinedCookieHeader)
var cookies = setCookie.parse(splitCookieHeaders);

console.log(cookies); // should be an array of cookies
