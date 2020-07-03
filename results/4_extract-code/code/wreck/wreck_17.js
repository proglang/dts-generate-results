const Wreck = require('@hapi/wreck');

const method = 'GET'; // GET, POST, PUT, DELETE
const uri = '/';
const readableStream = Wreck.toReadableStream('foo=bar');

const wreck = Wreck.defaults({
    headers: { 'x-foo-bar': 123 },
    agents: {
        https: new Https.Agent({ maxSockets: 100 }),
        http: new Http.Agent({ maxSockets: 1000 }),
        httpsAllowUnauthorized: new Https.Agent({ maxSockets: 100, rejectUnauthorized: false })
    }
});

// cascading example -- does not alter `wreck`
// inherits `headers` and `agents` specified above
const wreckWithTimeout = wreck.defaults({
    timeout: 5
});

// all attributes are optional
const options = {
    baseUrl: 'https://www.example.com',
    payload: readableStream || 'foo=bar' || Buffer.from('foo=bar'),
    headers: { /* http headers */ },
    redirects: 3,
    beforeRedirect: (redirectMethod, statusCode, location, resHeaders, redirectOptions, next) => next(),
    redirected: function (statusCode, location, req) {},
    timeout: 1000,    // 1 second, default: unlimited
    maxBytes: 1048576, // 1 MB, default: unlimited
    rejectUnauthorized: true || false,
    downstreamRes: null,
    agent: null,         // Node Core http.Agent
    secureProtocol: 'SSLv3_method', // The SSL method to use
    ciphers: 'DES-CBC3-SHA' // The TLS ciphers to support
};

const example = async function () {

    const promise = wreck.request(method, uri, options);
    try {
        const res = await promise;
        const body = await Wreck.read(res, options);
        console.log(body.toString());
    }
    catch (err) {
        // Handle errors
    }
};
