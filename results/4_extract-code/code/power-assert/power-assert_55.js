var assert = require('power-assert').customize({
    assertion: {
        destructive: false,
        modifyMessageOnRethrow: true,
        saveContextOnRethrow: true,
        patterns: [
            'assert(value, [message])',
            'assert.ok(value, [message])',
            'assert.equal(actual, expected, [message])',
            'assert.notEqual(actual, expected, [message])',
            'assert.strictEqual(actual, expected, [message])',
            'assert.notStrictEqual(actual, expected, [message])',
            'assert.deepEqual(actual, expected, [message])',
            'assert.notDeepEqual(actual, expected, [message])',
            'assert.deepStrictEqual(actual, expected, [message])',
            'assert.notDeepStrictEqual(actual, expected, [message])'
        ]
    },
    output: {
        lineDiffThreshold: 5,
        maxDepth: 1,
        anonymous: 'Object',
        circular: '#@Circular#',
        lineSeparator: '\n',
        ambiguousEastAsianCharWidth: 2,
        widthOf: (Function to calculate width of string. Please see power-assert-formatter's documentation)
        stringify: (Function to stringify any target value. Please see power-assert-formatter's documentation)
        diff: (Function to create diff string between two strings. Please see power-assert-formatter's documentation)
        writerClass: (Constructor Function for output writer class. Please see power-assert-formatter's documentation)
        renderers: [
            './built-in/file',
            './built-in/assertion',
            './built-in/diagram',
            './built-in/binary-expression'
        ]
    }
});
