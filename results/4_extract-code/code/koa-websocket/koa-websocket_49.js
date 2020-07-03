const Koa = require('koa'),
  route = require('koa-route'),
  websockify = require('koa-websocket');

const wsOptions = {};
const app = websockify(new Koa(), wsOptions);

app.ws.use(route.all('/', (ctx) => {
   // the websocket is added to the context as `ctx.websocket`.
  ctx.websocket.on('message', function(message) {
    // print message from the client
    console.log(message);
  });
}));

app.listen(3000);
