var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');
var postcssMiddleware = require('postcss-middleware');
var autoprefixer = require('autoprefixer');
var path = require('path');
var http = require('http');
var app = connect();
var destPath = __dirname + '/public';
app.use(sassMiddleware({
    /* Options */
    src: __dirname
  , response: false
  , dest: destPath
  , outputStyle: 'extended'
}));
app.use(postcssMiddleware({
  plugins: [
    /* Plugins */
    autoprefixer({
      /* Options */
    })
  ],
  src: function(req) {
    return path.join(destPath, req.url);
  }
}));

http.createServer(app).listen(3000);
