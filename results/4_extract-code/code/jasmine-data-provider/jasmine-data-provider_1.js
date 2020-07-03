var using = require('jasmine-data-provider');

describe('test subtraction with data provider - direct array', function () {
    using([{a: 5, b: 2, expected: 3}, {a: 25, b: 26, expected: -1}], function (data) {
        it('should calc with operator -', function () {
            var result = calculator.calc(data.a, data.b, '-');

            expect(result).toEqual(data.expected);
        });
    });
});
