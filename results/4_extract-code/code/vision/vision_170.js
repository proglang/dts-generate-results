const Hapi = require('@hapi/hapi');
const Mustache = require('mustache');
const Vision = require('@hapi/vision');

const server = Hapi.Server({ port: 3000 });

const rootHandler = (request, h) => {

    return h.view('index', {
        title: 'examples/mustache/templates/basic | Hapi ' + request.server.version,
        message: 'Hello Mustache!'
    });
};

const provision = async () => {

    await server.register(Vision);

    server.views({
        engines: {
            html: {
                compile: (template) => {

                    Mustache.parse(template);

                    return (context) => {

                        return Mustache.render(template, context);
                    };
                }
            }
        },
        relativeTo: __dirname,
        path: 'examples/mustache/templates/basic'
    });

    server.route({ method: 'GET', path: '/', handler: rootHandler });

    await server.start();
    console.log('Server running at:', server.info.uri);
};

provision();
