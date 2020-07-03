const Path = require('path');

const Hapi = require('@hapi/hapi');
const Pug = require('pug');
const Vision = require('@hapi/vision');

const server = Hapi.Server({ port: 3000 });

const rootHandler = (request, h) => {

    return h.view('index', {
        title: 'examples/pug/templates | Hapi ' + request.server.version,
        message: 'Hello Pug!'
    });
};

const provision = async () => {

    await server.register(Vision);

    server.views({
        engines: { pug: Pug },
        relativeTo: __dirname,
        path: 'examples/pug/templates',
        compileOptions: {
            // By default Pug uses relative paths (e.g. ../root.pug), when using absolute paths (e.g. include /root.pug), basedir is prepended.
            // https://pugjs.org/language/includes.html
            basedir: Path.join(__dirname, 'examples/pug/templates')
        }
    });

    server.route({ method: 'GET', path: '/', handler: rootHandler });

    await server.start();
    console.log('Server running at:', server.info.uri);
};

provision();
