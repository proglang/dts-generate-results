var JavaScriptObfuscator = require('javascript-obfuscator');

var obfuscationResult = JavaScriptObfuscator.obfuscate(
    `
        (function(){
            var variable1 = '5' - 3;
            var variable2 = '5' + 3;
            var variable3 = '5' + - '2';
            var variable4 = ['10','10','10','10','10'].map(parseInt);
            var variable5 = 'foo ' + 1 + 1;
            console.log(variable1);
            console.log(variable2);
            console.log(variable3);
            console.log(variable4);
            console.log(variable5);
        })();
    `,
    {
        compact: false,
        controlFlowFlattening: true
    }
);

console.log(obfuscationResult.getObfuscatedCode());
/*
var _0x2218 = [
    '8|3|1|2|0|4|6|9|7|5',
    'bqndd',
    'dySIh',
    'kTiiG',
    'log',
    'tuvgv'
];
(function (_0x38b423, _0x1d6bd4) {
    var _0x39a849 = function (_0x5794c7) {
        while (--_0x5794c7) {
            _0x38b423['push'](_0x38b423['shift']());
        }
    };
    _0x39a849(++_0x1d6bd4);
}(_0x2218, 0x114));
var _0x8221 = function (_0xcac13e, _0x3627d7) {
    _0xcac13e = _0xcac13e - 0x0;
    var _0x1eae4d = _0x2218[_0xcac13e];
    return _0x1eae4d;
};
(function () {
    var _0x5336d5 = {
        'bqndd': _0x8221('0x0'),
        'islRd': function _0x2abb6c(_0x2f45f8, _0x4d47b0) {
            return _0x2f45f8 + _0x4d47b0;
        },
        'kTiiG': function _0x32525a(_0x44ba8d, _0x2c5e0c) {
            return _0x44ba8d + _0x2c5e0c;
        },
        'dySIh': 'foo\x20',
        'tuvgv': function _0x28d015(_0x35d81a, _0x2d2463) {
            return _0x35d81a - _0x2d2463;
        }
    };
    var _0x5000ba = _0x5336d5[_0x8221('0x1')]['split']('|'), _0x5c972f = 0x0;
    while (!![]) {
        switch (_0x5000ba[_0x5c972f++]) {
        case '0':
            var _0x586faa = _0x5336d5['islRd'](_0x5336d5['kTiiG'](_0x5336d5[_0x8221('0x2')], 0x1), 0x1);
            continue;
        case '1':
            var _0xab6a82 = _0x5336d5[_0x8221('0x3')]('5', -'2');
            continue;
        case '2':
            var _0x19ab9d = [
                '10',
                '10',
                '10',
                '10',
                '10'
            ]['map'](parseInt);
            continue;
        case '3':
            var _0x321653 = _0x5336d5[_0x8221('0x3')]('5', 0x3);
            continue;
        case '4':
            console['log'](_0x2c1b0c);
            continue;
        case '5':
            console[_0x8221('0x4')](_0x586faa);
            continue;
        case '6':
            console[_0x8221('0x4')](_0x321653);
            continue;
        case '7':
            console[_0x8221('0x4')](_0x19ab9d);
            continue;
        case '8':
            var _0x2c1b0c = _0x5336d5[_0x8221('0x5')]('5', 0x3);
            continue;
        case '9':
            console[_0x8221('0x4')](_0xab6a82);
            continue;
        }
        break;
    }
}());
*/
