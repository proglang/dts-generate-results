require.config({
  paths: {
    urijs: 'where-you-put-uri.js/src'
  }
});

require(['urijs/URI'], function(URI) {
  console.log("URI.js and dependencies: ", URI("//amazon.co.uk").is('sld') ? 'loaded' : 'failed');
});
require(['urijs/URITemplate'], function(URITemplate) {
  console.log("URITemplate.js and dependencies: ", URITemplate._cache ? 'loaded' : 'failed');
});
