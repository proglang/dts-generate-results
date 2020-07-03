fastify.register(require('fastify-rate-limit'), {
  /* ... */
  keyGenerator: function(req) {
    return req.headers['x-real-ip'] // nginx
    || req.headers['x-client-ip'] // apache
    || req.headers['x-forwarded-for'] // use this only if you trust the header
    || req.session.username // you can limit based on any session value
    || req.raw.ip // fallback to default
})
