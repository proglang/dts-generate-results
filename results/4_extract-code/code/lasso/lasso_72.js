require('lasso-loader').async(
    'my-module/lazy',
    function() {
        var foo = require('foo');
        var bar = require('bar');
    });
