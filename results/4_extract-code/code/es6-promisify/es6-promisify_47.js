const {promisify} = require("es6-promisify");

// Now uses Bluebird
promisify.Promise = require("bluebird");

const test = promisify(cb => cb(undefined, "test"));
test().then(result => {
    console.log(result); // "test", resolved using Bluebird
});
