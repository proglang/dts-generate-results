var connect = require('connect')
var sassMiddleware = require('node-sass-middleware')
var server = connect.createServer(
  sassMiddleware({
      /* Options */
      src: __dirname
    , dest: __dirname + '/public'
    , debug: true
    , outputStyle: 'compressed'
    , prefix:  '/prefix'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
  }),
  connect.static('/prefix', __dirname + '/public')
);
