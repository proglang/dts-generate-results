const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');

const server = Hapi.Server({ port: 3000 });

const provision = async () => {

    await server.register(Vision);
    await server.start();

    console.log('Server running at:', server.info.uri);
};

provision();
