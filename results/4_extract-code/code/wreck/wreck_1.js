const HTTPS = require('https');
const Wreck = require('@hapi/wreck');

Wreck.agents.https = new HTTPS.Agent({
    cert,
    key,
    ca
});
