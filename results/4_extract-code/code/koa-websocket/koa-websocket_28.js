const Koa = require('koa');
const greenlock = require('greenlock-express');
const websockify = require('koa-websocket');
 
const le = greenlock.create({
  // all your sweet Let's Encrypt options here
});
 
// the magic happens right here
const app = websockify(new Koa(), wsOptions, le.httpsOptions);
 
app.ws.use((ctx) => {
   // the websocket is added to the context as `ctx.websocket`.
  ctx.websocket.on('message', function(message) {
    // do something
  });
});
 
app.listen(3000);
