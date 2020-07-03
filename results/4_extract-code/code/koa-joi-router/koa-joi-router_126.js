const router = require('koa-joi-router');
const users = router();

users.get('/:id', handler);
users.use('/:id', runThisAfterHandler);
