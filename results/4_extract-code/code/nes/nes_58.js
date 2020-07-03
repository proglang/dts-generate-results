const Nes = require('@hapi/nes');

const client = new Nes.Client('ws://localhost');
const start = async () => {

    await client.connect();
    const handler = (update, flags) => {

        // update -> { id: 5, status: 'complete' }
        // Second publish is not received (doesn't match)
    };

    client.subscribe('/item/5', handler);
};

start();
