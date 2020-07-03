
var Scroll = require('react-scroll');
var Events = Scroll.Events;

Events.scrollEvent.register('begin', function(to, element) {
  console.log("begin", to, element);
});

