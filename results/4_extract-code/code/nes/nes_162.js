const Nes = require('@hapi/nes');

const client = new Nes.Client('ws://localhost');
const start = async () => {

    await client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } });
    const payload = await client.request('hello')  // Can also request '/h'
    // payload -> 'Hello John Doe'
};

start();
