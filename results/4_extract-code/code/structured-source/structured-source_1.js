const  StructuredSource = require('structured-source');

let src = new StructuredSource('aaa\u2028aaaa\u2029aaaaa\n');

// positionToIndex({ line: number, column: number) -> number
assert(src.positionToIndex({ line: 1, column: 2 }) === 2);

// indexToPosition(number) -> { line: number, column: number }
assert.deepEqual(src.indexToPosition(2), { line: 1, column: 2 });

// rangeToLocation([ number, number ]) -> { start: { line: number, column: number}, end: { line: number, column: number } }
assert.deepEqual(src.rangeToLocation([0, 2]), {
    start: { line: 1, column: 0 },
    end: { line: 1, column: 2 }
});

// locationToRange({ start: { line: number, column: number}, end: { line: number, column: number } }) -> [ number, number ]
assert.deepEqual(src.locationToRange({
    start: { line: 1, column: 0 },
    end: { line: 1, column: 2 }
}), [0, 2]);
