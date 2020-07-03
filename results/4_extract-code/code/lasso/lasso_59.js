require('lasso-loader').async(
    [
        './style.less',
        'some/other/browser.json'
    ],
    function() {
        // All of the requires nested in this function block will be lazily loaded.
        // When all of the required resources are loaded then the function will be invoked.
        var foo = require('foo');
        var bar = require('bar');
    });
