const {promisify} = require("es6-promisify");

function test(cb) {
    return cb(undefined, 1, 2, 3);
}

// Create promise-based version of test
test[promisify.argumentNames] = ["one", "two", "three"];
const multi = promisify(test);

// Returns named arguments
multi().then(result => {
    console.log(result); // {one: 1, two: 2, three: 3}
});
