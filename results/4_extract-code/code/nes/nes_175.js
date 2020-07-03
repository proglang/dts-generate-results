const Hapi = require('@hapi/hapi');
const Basic = require('@hapi/basic');
const Bcrypt = require('bcrypt');
const Nes = require('@hapi/nes');

const server = new Hapi.Server();

const start = async () => {

    await server.register([Basic, Nes]);

    // Set up HTTP Basic authentication

    const users = {
        john: {
            username: 'john',
            password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
            name: 'John Doe',
            id: '2133d32a'
        }
    };

    const validate = async (request, username, password) => {

        const user = users[username];
        if (!user) {
            return { isValid: false };
        }

        const isValid = await Bcrypt.compare(password, user.password);
        const  credentials = { id: user.id, name: user.name };
        return { isValid, credentials };
    };

    server.auth.strategy('simple', 'basic', 'required', { validate });

    // Set up subscription

    server.subscription('/items', {
        filter: (path, message, options) => {

            return (message.updater !== options.credentials.username);
        }
    });

    await server.start();
    server.publish('/items', { id: 5, status: 'complete', updater: 'john' });
    server.publish('/items', { id: 6, status: 'initial', updater: 'steve' });
};

start();
