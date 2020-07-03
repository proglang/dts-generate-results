const koa = require('koa');
const router = require('koa-joi-router');
const Joi = router.Joi;

const public = router();

public.get('/', async (ctx) => {
  ctx.body = 'hello joi-router!';
});

public.route({
  method: 'post',
  path: '/signup',
  validate: {
    body: {
      name: Joi.string().max(100),
      email: Joi.string().lowercase().email(),
      password: Joi.string().max(100),
      _csrf: Joi.string().token()
    },
    type: 'form',
    output: {
      200: {
        body: {
          userId: Joi.string(),
          name: Joi.string()
        }
      }
    }
  },
  handler: async (ctx) => {
    const user = await createUser(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }
});

const app = new koa();
app.use(public.middleware());
app.listen(3000);
