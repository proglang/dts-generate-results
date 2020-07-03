const {promisify} = require("es6-promisify");

// Convert the stat function
const fs = require("fs");
const stat = promisify(fs.stat);

// Now usable as a promise!
stat("example.txt").then(function (stats) {
    console.log("Got stats", stats);
}).catch(function (err) {
    console.error("Yikes!", err);
});
