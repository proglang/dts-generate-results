const Hapi = require('@hapi/hapi');
const Nes = require('@hapi/nes');

const server = new Hapi.Server();

const start = async () => {

    await server.register(Nes);
    server.subscription('/item/{id}');
    await server.start();
    server.publish('/item/5', { id: 5, status: 'complete' });
    server.publish('/item/6', { id: 6, status: 'initial' });
};

start();
