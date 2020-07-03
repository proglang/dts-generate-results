const router = require('koa-joi-router');
const admin = router();

// signature: router.method(path [, config], handler [, handler])

admin.put('/thing', handler);
admin.get('/thing', middleware, handler);
admin.post('/thing', config, handler);
admin.delete('/thing', config, middleware, handler);
