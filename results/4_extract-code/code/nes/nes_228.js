const Nes = require('@hapi/nes');

const client = new Nes.Client('ws://localhost');

// Authenticate as 'john'

const start = async () => {

    await client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } });
    const handler = (err, update) => {

        // First publish is not received (filtered due to updater key)
        // update -> { id: 6, status: 'initial', updater: 'steve' }
    };

    client.subscribe('/items', handler);
};

start();
