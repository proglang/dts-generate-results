// Load modules

const Bell = require('@hapi/bell');
const Hapi = require('@hapi/hapi');


// Declare internals

const internals = {};


internals.start = async function () {

    const server = Hapi.server({ port: 8000 });

    // Register bell with the server

    await server.register(Bell);

    // Declare an authentication strategy using the bell scheme
    // with the name of the provider, cookie encryption password,
    // and the OAuth client credentials.

    server.auth.strategy('twitter', 'bell', {
        provider: 'twitter',
        password: 'cookie_encryption_password_secure',
        clientId: 'my_twitter_client_id',
        clientSecret: 'my_twitter_client_secret',
        isSecure: false     // Terrible idea but required if not using HTTPS especially if developing locally
    });

    // Use the 'twitter' authentication strategy to protect the
    // endpoint handling the incoming authentication credentials.
    // This endpoint usually looks up the third party account in
    // the database and sets some application state (cookie) with
    // the local application account information.

    server.route({
        method: ['GET', 'POST'],    // Must handle both GET and POST
        path: '/login',             // The callback endpoint registered with the provider
        options: {
            auth: 'twitter',
            handler: function (request, h) {

                if (!request.auth.isAuthenticated) {
                    return `Authentication failed due to: ${request.auth.error.message}`;
                }

                // Perform any account lookup or registration, setup local session,
                // and redirect to the application. The third-party credentials are
                // stored in request.auth.credentials. Any query parameters from
                // the initial request are passed back via request.auth.credentials.query.

                return h.redirect('/home');
            }
        }
    });

    await server.start();
};

internals.start();
