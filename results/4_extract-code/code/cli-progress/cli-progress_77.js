const _colors = require('colors');

module.exports = {
    format: _colors.red(' {bar}') + ' {percentage}% | ETA: {eta}s | {value}/{total} | Speed: {speed} kbit',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591'
};
