const router = require('koa-joi-router');
const public = router();

const routes = [
  {
    method: 'post',
    path: '/users',
    handler: async (ctx) => {}
  },
  {
    method: 'get',
    path: '/users',
    handler: async (ctx) => {}
  }
];

public.route(routes);
