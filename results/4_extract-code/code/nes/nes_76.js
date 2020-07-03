const Hapi = require('@hapi/hapi');
const Nes = require('@hapi/nes');

const server = new Hapi.Server();

const start = async () => {

    await server.register(Nes);
    await server.start();
    server.broadcast('welcome!');
};

start();
