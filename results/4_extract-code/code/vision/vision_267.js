const Hapi = require('@hapi/hapi');
const Twig = require('twig');
const Vision = require('@hapi/vision');

const server = Hapi.Server({ port: 3000 });

const rootHandler = (request, h) => {

    return h.view('index', {
        title: 'examples/twig/templates | Hapi ' + request.server.version,
        message: 'Hello Twig!'
    });
};

const provision = async () => {

    await server.register(Vision);

    server.views({
        engines: {
            twig: {
                compile: (src, options) => {

                    const template = Twig.twig({ id: options.filename, data: src });

                    return (context) => {

                        return template.render(context);
                    };
                }
            }
        },
        relativeTo: __dirname,
        path: 'examples/twig/templates'
    });

    server.route({ method: 'GET', path: '/', handler: rootHandler });

    await server.start();
    console.log('Server running at:', server.info.uri);
};

provision();
