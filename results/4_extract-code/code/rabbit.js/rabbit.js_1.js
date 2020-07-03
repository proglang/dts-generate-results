var context = require('rabbit.js').createContext();
context.on('ready', function() {
  var pub = context.socket('PUB'), sub = context.socket('SUB');
  sub.pipe(process.stdout);
  sub.connect('events', function() {
    pub.connect('events', function() {
      pub.write(JSON.stringify({welcome: 'rabbit.js'}), 'utf8');
    });
  });
});
