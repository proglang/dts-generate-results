const Nes = require('@hapi/nes');

const client = new Nes.Client('ws://localhost');
const start = async () => {

    await client.connect();
    client.onUpdate = (update) => {

        // update -> 'welcome!'
    };
};

start();
