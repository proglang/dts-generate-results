var merge = require('tea-merge');

// sample objects
var a = { hello: 'universe', arr: [ { a: 'a' } ] }
  , b = { speak: 'loudly', arr: [ { b: 'b' }, { c: 'c' } };

merge(a, b);
a.should.deep.equal({
    hello: 'universe'
  , speak: 'loudly'
  , arr: [
        { a: 'a', b: 'b' }
      , { c: 'c' }
    ]
});
