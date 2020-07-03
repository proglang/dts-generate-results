const router = require('koa-joi-router');
const users = router();

const findUser = (id) => {
  // stub
  return Promise.resolve('Cheddar');
};

users.param('user', async (id, ctx, next) => {
  const user = await findUser(id);
  if (!user) return ctx.status = 404;
  ctx.user = user;
  await next();
});

users.get('/users/:user', (ctx) => {
  ctx.body = `Hello ${ctx.user}`;
});

// GET /users/3 -> 'Hello Cheddar'
