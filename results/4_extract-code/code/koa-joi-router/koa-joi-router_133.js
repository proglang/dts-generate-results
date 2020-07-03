const router = require('koa-joi-router');
const users = router();

users.get('/:id', handler);
// GET /users/3 -> 404
// GET /3 -> 200

users.prefix('/user');
// GET /users/3 -> 200
// GET /3 -> 404
