'use strict';

const Hapi = require('@hapi/hapi');


const internals = {};


// Simulate database for demo

internals.users = [
    {
        id: 1,
        name: 'john',
        password: 'password',
    },
];


internals.renderHtml = {
    login: (message) => {

        return `
    <html><head><title>Login page</title></head><body>
    ${message ? '<h3>' + message + '</h3><br/>' : ''}
    <form method="post" action="/login">
      Username: <input type="text" name="username"><br>
      Password: <input type="password" name="password"><br/>
    <input type="submit" value="Login"></form>
    </body></html>
      `;
    },
    home: (name) => {

        return `
    <html><head><title>Login page</title></head><body>
    <h3>Welcome ${name}! You are logged in!</h3>
    <form method="get" action="/logout">
      <input type="submit" value="Logout">
    </form>
    </body></html>
      `;
    }
};


internals.server = async function () {

    const server = Hapi.server({ port: 8000 });

    await server.register(require('@hapi/cookie'));

    server.auth.strategy('session', 'cookie', {

        cookie: {
            name: 'sid-example',

            // Don't forget to change it to your own secret password!
            password: 'password-should-be-32-characters',

            // For working via HTTP in localhost
            isSecure: false
        },

        redirectTo: '/login',

        validateFunc: async (request, session) => {

            const account = internals.users.find((user) => (user.id = session.id));

            if (!account) {
                // Must return { valid: false } for invalid cookies
                return { valid: false };
            }

            return { valid: true, credentials: account };
        }
    });

    server.auth.default('session');

    server.route([
        {
            method: 'GET',
            path: '/',
            options: {
                handler: (request, h) => {

                    return internals.renderHtml.home(request.auth.credentials.name);
                }
            }
        },
        {
            method: 'GET',
            path: '/login',
            options: {
                auth: {
                    mode: 'try'
                },
                plugins: {
                    'hapi-auth-cookie': {
                        redirectTo: false
                    }
                },
                handler: async (request, h) => {

                    if (request.auth.isAuthenticated) {
                        return h.redirect('/');
                    }

                    return internals.renderHtml.login();
                }
            }
        },
        {
            method: 'POST',
            path: '/login',
            options: {
                auth: {
                    mode: 'try'
                },
                handler: async (request, h) => {

                    const { username, password } = request.payload;
                    if (!username || !password) {
                        return internals.renderHtml.login('Missing username or password');
                    }

                    // Try to find user with given credentials

                    const account = internals.users.find(
                        (user) => user.name === username && user.password === password
                    );

                    if (!account) {
                        return internals.renderHtml.login('Invalid username or password');
                    }

                    request.cookieAuth.set({ id: account.id });
                    return h.redirect('/');
                }
            }
        },
        {
            method: 'GET',
            path: '/logout',
            options: {
                handler: (request, h) => {

                    request.cookieAuth.clear();
                    return h.redirect('/');
                }
            }
        }
    ]);

    await server.start();
    console.log(`Server started at: ${server.info.uri}`);
};


internals.start = async function() {

    try {
        await internals.server();
    }
    catch (err) {
        console.error(err.stack);
        process.exit(1);
    }
};

internals.start();
