const router = require('koa-joi-router');
const public = router();
public.get('/hello', async (ctx) => {
  console.log(ctx.state.route);
});
