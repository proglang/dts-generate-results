const Ejs = require('ejs');
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');

const server = Hapi.Server({ port: 3000 });

const rootHandler = (request, h) => {

    return h.view('index', {
        title: 'examples/ejs/templates/basic | Hapi ' + request.server.version,
        message: 'Hello Ejs!'
    });
};

const provision = async () => {

    await server.register(Vision);

    server.views({
        engines: { ejs: Ejs },
        relativeTo: __dirname,
        path: 'examples/ejs/templates/basic'
    });

    server.route({ method: 'GET', path: '/', handler: rootHandler });

    await server.start();
    console.log('Server running at:', server.info.uri);
};

provision();
