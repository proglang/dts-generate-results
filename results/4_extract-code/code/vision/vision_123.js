const Hapi = require('@hapi/hapi');
const Marko = require('marko');
const Vision = require('@hapi/vision');

const server = Hapi.Server({ port: 3000 });

const rootHandler = (request, h) => {

    return h.view('index', {
        title: 'examples/marko/templates | Hapi ' + request.server.version,
        message: 'Hello Marko!'
    });
};

const provision = async () => {

    await server.register(Vision);

    server.views({
        engines: {
            marko: {
                compile: (src, options) => {

                    const opts = { preserveWhitespace: true, writeToDisk: false };

                    const template = Marko.load(options.filename, opts);

                    return (context) => {

                        return template.renderToString(context);
                    };
                }
            }
        },
        relativeTo: __dirname,
        path: 'examples/marko/templates'
    });

    server.route({ method: 'GET', path: '/', handler: rootHandler });

    await server.start();
    console.log('Server running at:', server.info.uri);
};

provision();
