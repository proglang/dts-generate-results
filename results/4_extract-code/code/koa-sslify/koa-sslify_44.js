const Koa = require('koa');
const {
  default: enforceHttps,
  xForwardedProtoResolver: resolver
} = require('koa-sslify');

var app = new Koa();

// Force HTTPS via x-forwarded-proto compatible resolver
app.use(enforceHttps({ resolver }));

// index page
app.use((ctx) => {
  ctx = "hello world from " + ctx.request.url;
});

// proxy will bind this port to it's 443 and 80 ports
app.listen(3000);
