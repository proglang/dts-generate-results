const fs = require('fs');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new console.Console(output, errorOutput);

console_stamp(logger, {
    stdout: output,
    stderr: errorOutput
});
