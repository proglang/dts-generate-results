// send_response.js

var getNamespace = require('cls-hooked').getNamespace;
var session = getNamespace('my session');

var render = require('./lib/render.js')

function finish(response) {
  var user = session.get('user');
  render({user: user}).pipe(response);
}
