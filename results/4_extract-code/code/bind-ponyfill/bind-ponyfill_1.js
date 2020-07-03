var bind = require('bind-ponyfill');

bind(function() {
  console.log(this);
}, 'Hello world!');
