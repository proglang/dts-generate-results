const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
