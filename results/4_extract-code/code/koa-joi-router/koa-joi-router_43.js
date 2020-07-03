const router = require('koa-joi-router');
const Joi = router.Joi;

const pub = router();
const admin = router();
const auth = router();

// add some routes ..
pub.get('/some/path', async () => {});
admin.get('/admin', async () => {});
auth.post('/auth', async () => {});

const app = koa();
koa.use(pub.middleware());
koa.use(admin.middleware());
koa.use(auth.middleware());
app.listen();
