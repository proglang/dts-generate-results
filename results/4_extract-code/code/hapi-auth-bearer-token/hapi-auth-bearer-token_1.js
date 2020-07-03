const Hapi = require('hapi');
const AuthBearer = require('hapi-auth-bearer-token');

const server = Hapi.server({ port: 8080 });

const start = async () => {

    await server.register(AuthBearer)

    server.auth.strategy('simple', 'bearer-access-token', {
        allowQueryToken: true,              // optional, false by default
        validate: async (request, token, h) => {

            // here is where you validate your token
            // comparing with token from your database for example
            const isValid = token === '1234';

            const credentials = { token };
            const artifacts = { test: 'info' };

            return { isValid, credentials, artifacts };
        }
    });

    server.auth.default('simple');

    server.route({
        method: 'GET',
        path: '/',
        handler: async function (request, h) {

            return { info: 'success!' };
        }
    });

    await server.start();

    return server;
}

start()
    .then((server) => console.log(`Server listening on ${server.info.uri}`))
    .catch(err => {

        console.error(err);
        process.exit(1);
    })


/*
 * To test this example, from your terminal try:
 *  curl localhost:8080
 *     response: {"statusCode":401,"error":"Unauthorized","message":"Missing authentication"}
 *  curl localhost:8080?access_token=abc
 *     response: {"statusCode":401,"error":"Unauthorized","message":"Bad token","attributes":{"error":"Bad token"}}
 *  curl curl localhost:8080?access_token=1234
 *     response: {"info":"success!"}
 */
