const router = require('koa-joi-router');
const public = router();

public.get('/home', homepage);

const app = koa();
app.use(public.middleware()); // wired up
app.listen();
