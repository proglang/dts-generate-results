var request = require('request');
var source = '@import url(http://example.com/path/to/stylesheet.css);';
new CleanCSS({
  fetch: function (uri, inlineRequest, inlineTimeout, callback) {
    request(uri, function (error, response, body) {
      if (error) {
        callback(error, null);
      } else if (response && response.statusCode != 200) {
        callback(response.statusCode, null);
      } else {
        callback(null, body);
      }
    });
  }
}).minify(source);
