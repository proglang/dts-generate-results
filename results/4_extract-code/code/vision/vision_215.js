const Hapi = require('@hapi/hapi');
const Nunjucks = require('nunjucks');
const Vision = require('@hapi/vision');

const server = Hapi.Server({ port: 3000 });

const rootHandler = (request, h) => {

    return h.view('index', {
        title: 'examples/nunjucks/templates | Hapi ' + request.server.version,
        message: 'Hello Nunjucks!'
    });
};

const provision = async () => {

    await server.register(Vision);

    server.views({
        engines: {
            html: {
                compile: (src, options) => {

                    const template = Nunjucks.compile(src, options.environment);

                    return (context) => {

                        return template.render(context);
                    };
                },

                prepare: (options, next) => {

                    options.compileOptions.environment = Nunjucks.configure(options.path, { watch : false });

                    return next();
                }
            }
        },
        relativeTo: __dirname,
        path: 'examples/nunjucks/templates'
    });

    server.route({ method: 'GET', path: '/', handler: rootHandler });

    await server.start();
    console.log('Server running at:', server.info.uri);
};

provision();
