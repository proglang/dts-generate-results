const router = require('koa-joi-router');
const public = router();

public.route({
  method: 'post',
  path: '/signup',
  validate: {
    header: joiObject,
    query: joiObject,
    params: joiObject,
    body: joiObject,
    maxBody: '64kb',
    output: { '400-600': { body: joiObject } },
    type: 'form',
    failure: 400,
    continueOnError: false
  },
  pre: async (ctx, next) => {
    await checkAuth(ctx);
    return next();
  },
  handler: async (ctx) => {
    await createUser(ctx.request.body);
    ctx.status = 201;
  },
  meta: { 'this': { is: 'stored internally with the route definition' }}
});
