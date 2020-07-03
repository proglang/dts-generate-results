var followRedirects = require('follow-redirects').wrap({
  http: require('your-custom-http'),
  https: require('your-custom-https'),
});
