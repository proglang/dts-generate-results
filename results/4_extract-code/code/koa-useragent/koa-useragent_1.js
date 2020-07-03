const koa = require('koa'),
const app = koa.app()
const userAgent = require('koa-useragent');

app.use(userAgent);

app.use(async (ctx, next) {
    console.log(require('util').inspect(ctx.userAgent));
});

app.listen(3000);
