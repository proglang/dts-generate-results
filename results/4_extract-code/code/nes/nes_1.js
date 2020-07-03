const Hapi = require('@hapi/hapi');
const Nes = require('@hapi/nes');

const server = new Hapi.Server();

const start = async () => {

    await server.register(Nes);
    server.route({
        method: 'GET',
        path: '/h',
        config: {
            id: 'hello',
            handler: (request, h) => {

                return 'world!';
            }
        }
    });

    await server.start();
};

start();
