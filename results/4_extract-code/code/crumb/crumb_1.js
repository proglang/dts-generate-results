  const Hapi = require('@hapi/hapi');
  const Crumb = require('@hapi/crumb');

  const server = new Hapi.Server({ port: 8000 });

  (async () => {
    await server.register({
      plugin: Crumb,

      // plugin options
      options: {}
    });

    server.route({
      path: '/login',
      method: 'GET',
      options: {
        plugins: {
          // route specific options
          crumb: {}
        },
        handler(request, h) {
          // this requires to have a view engine configured
          return h.view('some-view');
        }
      }
    });
  })();
