const Http = require('http');
const Shot = require('@hapi/shot');


const internals = {};


internals.main = async function () {

    const dispatch = function (req, res) {

        const reply = 'Hello World';
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': reply.length });
        res.end(reply);
    };

    const server = Http.createServer(dispatch);

    const res = await Shot.inject(dispatch, { method: 'get', url: '/' });
    console.log(res.payload);
};


internals.main();
