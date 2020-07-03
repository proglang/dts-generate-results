const {promisify} = require("es6-promisify");

// Create a promise-based version of send_command
const redis = require("redis").createClient(6379, "localhost");
const client = promisify(redis.send_command.bind(redis));

// Send commands to redis and get a promise back
client("ping").then(function (pong) {
    console.log("Got", pong);
}).catch(function (err) {
    console.error("Unexpected error", err);
}).then(function () {
    redis.quit();
});
