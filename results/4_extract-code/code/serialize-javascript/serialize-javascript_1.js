var serialize = require('serialize-javascript');

serialize({
    str  : 'string',
    num  : 0,
    obj  : {foo: 'foo'},
    arr  : [1, 2, 3],
    bool : true,
    nil  : null,
    undef: undefined,
    date: new Date("Thu, 28 Apr 2016 22:02:17 GMT"),
    map: new Map([['hello', 'world']]),
    set: new Set([123, 456]),

    fn: function echo(arg) { return arg; },
    re: /([^\s]+)/g
});
